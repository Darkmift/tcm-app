import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import {COLLECTIONS, VALID_YEAR_REGEX} from '../../const'

const getYears = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const years = await pocketDbService.getCollection(COLLECTIONS.YEARS_AUTH)
    res.status(200).json({years})
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error)
    return res
      .status(500)
      .json({error: 'internal error: ' + (error as Error).message})
  }
}

const createYear = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {year, is_enabled} = req.body
    // validate year object
    if (VALID_YEAR_REGEX.test(year) === false) {
      return res.status(400).json({error: 'Invalid Year'})
    }

    const existingYear = await pocketDbService.findByFilter(
      COLLECTIONS.YEARS_AUTH,
      `year = ${year}`
    )
    if (existingYear) {
      return res.status(400).json({error: 'Year exists'})
    }

    const newYear = await pocketDbService.insertRecord(COLLECTIONS.YEARS_AUTH, {
      year,
      is_enabled,
    })
    res.status(201).json(newYear)
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error)
    return res
      .status(500)
      .json({error: 'internal error: ' + (error as Error).message})
  }
}

const updateYear = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {year, is_enabled} = req.body
    const {id} = req.query

    // validate year object
    if (!year) {
      return res.status(400).json({error: 'Year object is required'})
    }

    const updatedYear = await pocketDbService.updateRecord(
      COLLECTIONS.YEARS_AUTH,
      id as unknown as string,
      {year, is_enabled}
    )
    res.status(200).json(updatedYear)
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error)
    return res
      .status(500)
      .json({error: 'internal error: ' + (error as Error).message})
  }
}

const deleteYear = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as string
    const deletedYear = await pocketDbService.deleteRecord(
      COLLECTIONS.YEARS_AUTH,
      id
    )
    res.status(200).json(deletedYear)
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error)
    return res
      .status(500)
      .json({error: 'internal error: ' + (error as Error).message})
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getYears(req, res)

    case 'POST':
      return createYear(req, res)

    case 'PUT':
      return updateYear(req, res)

    case 'DELETE':
      return deleteYear(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({error: `Method ${method} Not Allowed`})
  }
}
