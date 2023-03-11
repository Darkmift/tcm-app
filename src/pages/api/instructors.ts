import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import {COLLECTIONS} from '../../const'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {Instructor, InsertInstructor} from '@/types'

const getInstructors = async (
  req: NextApiRequest,
  res: NextApiResponse<{instructors: Instructor[]} | {error: string}>
) => {
  try {
    const {year} = req.query
    const instructors = await pocketDbService.getCollection(
      COLLECTIONS.INSTRUCTORS,
      {filter: `year=${year}`}
    )
    return res.status(200).json({instructors})
  } catch (error) {
    console.error('Error getting instructors', error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const createInstructor = async (
  req: NextApiRequest,
  res: NextApiResponse<Instructor | {error: string; statusCode?: number}>
) => {
  try {
    const {
      body: {name, image, year, description},
    } = req

    if (!name || !image || !year || !description) {
      return res.status(400).json({error: 'Invalid Instructor'})
    }

    const newInstructor: InsertInstructor = {name, image, year, description}
    const createdInstructor = await pocketDbService.insertRecord(
      COLLECTIONS.INSTRUCTORS,
      {...newInstructor, year: year.year}
    )

    return res.status(201).json(createdInstructor as Instructor)
  } catch (error) {
    console.error('Error creating new instructor', error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const updateInstructor = async (
  req: NextApiRequest,
  res: NextApiResponse<Instructor | {error: string; statusCode?: number}>
) => {
  try {
    const {
      query: {id},
      body: {name, image, year, description},
    } = req
    const updatedFields: Partial<Instructor> = {}

    if (name) updatedFields.name = name
    if (image) updatedFields.image = image
    if (year) updatedFields.year = Number(year)
    if (description) updatedFields.description = description

    if (Object.keys(updatedFields).length === 0) {
      return res.status(400).json({error: 'At least one field must be updated'})
    }

    const updatedInstructor = await pocketDbService.updateRecord(
      COLLECTIONS.INSTRUCTORS,
      id as string,
      updatedFields
    )
    return res.status(200).json(updatedInstructor)
  } catch (error) {
    console.error(`Error updating instructor with ID ${req.query.id}`, error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const deleteInstructor = async (
  req: NextApiRequest,
  res: NextApiResponse<{message: string} | {error: string; statusCode?: number}>
) => {
  try {
    const {
      query: {id},
    } = req
    await pocketDbService.deleteRecord(COLLECTIONS.INSTRUCTORS, id as string)
    return res
      .status(200)
      .json({message: `Instructor with ID ${id} deleted successfully`})
  } catch (error) {
    console.error(`Error deleting instructor with ID ${req.query.id}`, error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const checkedCreateInstructor = checkAuthMiddleware(createInstructor)
const checkedDeleteInstructor = checkAuthMiddleware(deleteInstructor)
const checkedUpdateInstructor = checkAuthMiddleware(updateInstructor)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getInstructors(req, res)
    case 'POST':
      return checkedCreateInstructor(req, res)
    case 'PUT':
      return checkedUpdateInstructor(req, res)
    case 'DELETE':
      return checkedDeleteInstructor(req, res)
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      return res.status(405).json({
        error: `Method ${method} Not Allowed`,
        links: [],
      })
  }
}
