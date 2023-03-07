import {NextApiRequest, NextApiResponse} from 'next'
import {COLLECTIONS, INTERNSHIP_LINKS, VALID_YEAR_REGEX} from '../../const'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {Internship} from '@/types'

const getInterships = async (
  req: NextApiRequest,
  res: NextApiResponse<{internships: Internship[]} | {error: string}>
) => {
  try {
    const {year} = req.query
    console.log("🚀 ~ file: internships.ts:13 ~ year:", year)

    const internships = await pocketDbService.getCollection(
      COLLECTIONS.INTERNSHIPS,
      {filter: `year = ${year}`}
    )
    res.status(200).json(internships)
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

const createInternship = async (
  req: NextApiRequest,
  res: NextApiResponse<Internship | {error: string}>
) => {
  try {
    const {name, year, description} = req.body

    // Validate year object
    if (VALID_YEAR_REGEX.test(String(year)) === false) {
      return res.status(400).json({error: 'Invalid Year'})
    }

    // validate inputs
    if (!year || !name || !description) {
      return res.status(400).json({error: 'Invalid Internship'})
    }

    const internshipRecord = await pocketDbService.insertRecord(
      COLLECTIONS.INTERNSHIPS,
      {
        name,
        year,
        description,
      }
    )

    res.status(201).json(internshipRecord)
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

const updateInternship = async (
  req: NextApiRequest,
  res: NextApiResponse<Internship | {error: string; statusCode?: number}>
) => {
  try {
    const {id, year, name, description} = req.body

    // Validate year object
    if (year && VALID_YEAR_REGEX.test(String(year)) === false) {
      return res.status(400).json({error: 'Invalid Year'})
    }
    // validate inputs
    if (!id || !year || !name || !description) {
      return res.status(400).json({error: 'Invalid Internship'})
    }

    const updatedInternship = await pocketDbService.updateRecord(
      COLLECTIONS.INTERNSHIPS,
      id,
      {
        year,
        name,
        description,
      }
    )

    res.status(200).json(updatedInternship)
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

const deleteInternship = async (
  req: NextApiRequest,
  res: NextApiResponse<Internship | {error: string}>
) => {
  try {
    const {id} = req.query
    const deletedInternship = await pocketDbService.deleteRecord(
      COLLECTIONS.INTERNSHIPS,
      id as string
    )
    res.status(200).json(deletedInternship)
  } catch (error) {
    console.log('🚀 ~ file: internships.ts ~ error:', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

const checkedCreateInternship = checkAuthMiddleware(createInternship)
const checkedUpdateInternship = checkAuthMiddleware(updateInternship)
const checkedDeleteInternship = checkAuthMiddleware(deleteInternship)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getInterships(req, res)

    case 'POST':
      return checkedCreateInternship(req, res)

    case 'PUT':
      return checkedUpdateInternship(req, res)

    case 'DELETE':
      return checkedDeleteInternship(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({
        error: `Method ${method} Not Allowed`,
        links: INTERNSHIP_LINKS,
      })
  }
}
