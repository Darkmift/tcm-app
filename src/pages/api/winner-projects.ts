import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {InsertWinnerProject, WinnerProject} from '@/types'
import {COLLECTIONS} from '@/const'

// Handler to get all winner project
const getAllWinnerProjects = async (
  req: NextApiRequest,
  res: NextApiResponse<{winnerProjects: WinnerProject[]} | {error: string}>
) => {
  try {
    const winnerProjects = await pocketDbService.getCollection(
      COLLECTIONS.WINNER_PROJECTS,
      {expand: 'projectId'}
    )
    res.status(200).json({winnerProjects})
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 11 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to create a new winner project
const createWinnerProjectType = async (
  req: NextApiRequest,
  res: NextApiResponse<WinnerProject | {error: string}>
) => {
  try {
    // Extract necessary fields from request body
    const {title, projectId, year} = req.body as InsertWinnerProject
    console.log(
      '🚀 ~ file: winner-projects.ts:35 ~ {title, projectId, year}:',
      {title, projectId, year}
    )

    if (!title || !projectId || !year) {
      return res
        .status(400)
        .json({error: 'Please provide an title,projectId, and year'})
    }

    const createdWinnerProjectType = await pocketDbService.insertRecord(
      COLLECTIONS.WINNER_PROJECTS,
      {
        title,
        projectId,
        year,
      }
    )

    res.status(201).json(createdWinnerProjectType)
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 40 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to update an existing winner project
const updateWinnerProjectType = async (
  req: NextApiRequest,
  res: NextApiResponse<WinnerProject | {error: string}>
) => {
  try {
    const {id} = req.query
    const {title, projectId, year} = req.body as WinnerProject

    if (!title || !projectId || !year) {
      return res
        .status(400)
        .json({error: 'Please provide a title,projectId, and year'})
    }

    const updatedWinnerProject = await pocketDbService.updateRecord(
      COLLECTIONS.WINNER_PROJECTS,
      id as string,
      {
        title,
        projectId,
        year,
      }
    )

    res.status(200).json(updatedWinnerProject)
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 68 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to delete an existing winner project
const deleteWinnerProjectType = async (
  req: NextApiRequest,
  res: NextApiResponse<WinnerProject | {error: string}>
) => {
  try {
    const {id} = req.query
    const deletedWinnerProject = await pocketDbService.deleteRecord(
      COLLECTIONS.WINNER_PROJECTS,
      id as string
    )
    res.status(200).json(deletedWinnerProject)
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 86 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Use the checkAuthMiddleware to protect the create/update/delete routes
const checkedCreateWinnerProject = checkAuthMiddleware(createWinnerProjectType)

const checkedUpdateWinnerProject = checkAuthMiddleware(updateWinnerProjectType)

const checkedDeleteWinnerProject = checkAuthMiddleware(deleteWinnerProjectType)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getAllWinnerProjects(req, res)
    case 'POST':
      return checkedCreateWinnerProject(req, res)

    case 'PUT':
      return checkedUpdateWinnerProject(req, res)

    case 'DELETE':
      return checkedDeleteWinnerProject(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({error: `Method ${method} Not Allowed`})
  }
}
