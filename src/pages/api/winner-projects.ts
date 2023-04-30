import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {WinnerProject} from '@/types'
import {COLLECTIONS} from '@/const'
// import

// Handler to get all winner project types
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

/*
// Handler to create a new winner project type
const createWinnerProjectType = async (
  req: NextApiRequest,
  res: NextApiResponse<WinnerProjectType | {error: string}>
) => {
  try {
    // Extract necessary fields from request body
    const {icon, name, year} = req.body as InsertWinnerProjectType

    if (!icon || !name || !year) {
      return res
        .status(400)
        .json({error: 'Please provide an icon, name, and year'})
    }

    const createdWinnerProjectType = await pocketDbService.insertRecord(
      COLLECTIONS.WINNER_PROJECT_TYPES,
      {
        icon,
        name,
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

// Handler to update an existing winner project type
const updateWinnerProjectType = async (
  req: NextApiRequest,
  res: NextApiResponse<WinnerProjectType | {error: string}>
) => {
  try {
    const {id, icon, name, year} = req.body as WinnerProjectType

    if (!id || !icon || !name || !year) {
      return res
        .status(400)
        .json({error: 'Please provide an id, icon, name, and year'})
    }

    const updatedWinnerProjectType = await pocketDbService.updateRecord(
      COLLECTIONS.WINNER_PROJECT_TYPES,
      id,
      {
        icon,
        name,
        year,
      }
    )

    res.status(200).json(updatedWinnerProjectType)
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 68 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to delete an existing winner project type
const deleteWinnerProjectType = async (
  req: NextApiRequest,
  res: NextApiResponse<WinnerProjectType | {error: string}>
) => {
  try {
    const {id} = req.query
    const deletedWinnerProjectType = await pocketDbService.deleteRecord(
      COLLECTIONS.WINNER_PROJECT_TYPES,
      id as string
    )
    res.status(200).json(deletedWinnerProjectType)
  } catch (error) {
    console.log('🚀 ~ file: winnerProjectTypes.ts ~ line 86 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Use the checkAuthMiddleware to protect the create/update/delete routes
const checkedCreateWinnerProjectType = checkAuthMiddleware(
  createWinnerProjectType
)
const checkedUpdateWinnerProjectType = checkAuthMiddleware(
  updateWinnerProjectType
)
const checkedDeleteWinnerProjectType = checkAuthMiddleware(
  deleteWinnerProjectType
)
*/
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getAllWinnerProjects(req, res)
    /*
    case 'POST':
      return checkedCreateWinnerProjectType(req, res)

    case 'PUT':
      return checkedUpdateWinnerProjectType(req, res)

    case 'DELETE':
      return checkedDeleteWinnerProjectType(req, res)
    */
    default:
      res.setHeader('Allow', ['GET' /*, 'POST', 'PUT', 'DELETE'*/])
      res.status(405).json({error: `Method ${method} Not Allowed`})
  }
}
