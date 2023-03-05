import { NextApiRequest, NextApiResponse } from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import { Project } from '@/types'

// Handler to get all projects
const getAllProjects = async (
  req: NextApiRequest,
  res: NextApiResponse<{ projects: Project[] } | { error: string }>
) => {
  try {
    const projects = await pocketDbService.getCollection('projects')
    res.status(200).json({ projects })
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 10 ~ error', error)
    return res
      .status(500)
      .json({ error: `Internal error: ${(error as Error).message}` })
  }
}

// Handler to create a new project
const createProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Project | { error: string }>
) => {
  try {
    // Extract necessary fields from request body
    const { name, description, year } = req.body

    if (!name || !description || !year) {
      return res
        .status(400)
        .json({ error: 'Please provide a name, description and year' })
    }

    const createdProject = await pocketDbService.insertRecord('projects', {
      name,
      description,
      year,
    })

    res.status(201).json(createdProject)
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 40 ~ error', error)
    return res
      .status(500)
      .json({ error: `Internal error: ${(error as Error).message}` })
  }
}

// Handler to update an existing project
const updateProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Project | { error: string }>
) => {
  try {
    const { id, name, description, year } = req.body

    if (!id || !name || !description || !year) {
      return res
        .status(400)
        .json({ error: 'Please provide an id, name, description and year' })
    }

    const updatedProject = await pocketDbService.updateRecord('projects', id, {
      name,
      description,
      year,
    })

    res.status(200).json(updatedProject)
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 68 ~ error', error)
    return res
      .status(500)
      .json({ error: `Internal error: ${(error as Error).message}` })
  }
}

// Handler to delete an existing project
const deleteProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Project | { error: string }>
) => {
  try {
    const { id } = req.query
    const deletedProject = await pocketDbService.deleteRecord('projects', id as string)
    res.status(200).json(deletedProject)
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 86 ~ error', error)
    return res
      .status(500)
      .json({ error: `Internal error: ${(error as Error).message}` })
  }
}

// Use the checkAuthMiddleware to protect the create/update/delete routes
const checkedCreateProject = checkAuthMiddleware(createProject)
const checkedUpdateProject = checkAuthMiddleware(updateProject)
const checkedDeleteProject = checkAuthMiddleware(deleteProject)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req

  switch (method) {
    case 'GET':
      return getAllProjects(req, res)

    case 'POST':
      return checkedCreateProject(req, res)

    case 'PUT':
      return checkedUpdateProject(req, res)

    case 'DELETE':
      return checkedDeleteProject(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({ error: `Method ${method} Not Allowed` })
  }
}
