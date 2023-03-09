import {COLLECTIONS} from '@/const'
import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {Project, ProjectMemberRelation, Member, ApiProjectEntry} from '@/types'

// Handler to get all projects
const getAllProjects = async (
  req: NextApiRequest,
  res: NextApiResponse<{projects: Project[]} | {error: string}>
) => {
  try {
    const {year} = req.query
    console.log('🚀 ~ file: projects.ts:14 ~ year:', year)
    const projects: Project[] = await pocketDbService.getCollection(
      COLLECTIONS.PROJECTS,
      {filter: `year=${year}`, expand: 'instructorId,internshipId'}
    )
    const relations: ProjectMemberRelation[] =
      await pocketDbService.getCollection('project_member_relation', {
        expand: 'memberId',
      })
    projects.forEach((project) => {
      const relationsPerProject = relations.filter(
        (r) => r.projectId === project.id
      )
      if (relationsPerProject?.length < 1) return
      project.members = relationsPerProject.map(
        (r) => r.expand?.memberId
      ) as Member[]
    })

    res.status(200).json({projects})
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 10 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to create a new project
const createProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Project | {error: string} | any>
) => {
  try {
    // Extract necessary fields from request body
    const {
      name,
      description,
      year,
      image,
      members,
      instructorId,
      internshipId,
    }: ApiProjectEntry = req.body

    if (!name || !description || !year?.year) {
      return res
        .status(400)
        .json({error: 'Please provide a name, description and year'})
    }

    const createdProject = await pocketDbService.insertRecord(
      COLLECTIONS.PROJECTS,
      {
        name,
        description,
        year: year.year,
        instructorId: instructorId?.id,
        internshipId: internshipId?.id,
        imageUrl: image,
      }
    )

    if (!createdProject) throw new Error('project creation failed')

    if (members?.length) {
      for await (const member of members) {
        const filter = `projectId = "${createdProject.id}" && memberId = "${member.id}"`
        const result = await pocketDbService.findByFilter(
          COLLECTIONS.PROJECT_MEMBER_RELATION,
          filter
        )
        if (result) continue
        await pocketDbService.insertRecord(
          COLLECTIONS.PROJECT_MEMBER_RELATION,
          {
            projectId: createdProject.id,
            memberId: member.id,
          }
        )
      }
    }

    res.status(201).json(createdProject)
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 40 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to update an existing project
const updateProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Project | {error: string}>
) => {
  try {
    const {
      id,
      name,
      description,
      year,
      image,
      members,
      instructorId,
      internshipId,
    }: ApiProjectEntry = req.body

    if (!id) {
      return res.status(400).json({error: 'Please provide an id'})
    }

    if (!!name?.length === false) {
      return res.status(400).json({error: 'name provided is invalid'})
    }

    const rawData: any = {
      name,
      description,
      year,
      image,
      members,
      instructorId,
      internshipId,
    }

    for (const key in rawData) {
      if (!!rawData[key] === false) {
        delete rawData[key]
      } else {
        switch (key) {
          case 'year':
            rawData[key] = year.year
            break
          case 'instructorId':
            rawData[key] = instructorId?.id
            break
          case 'internshipId':
            rawData[key] = internshipId?.id
            break
        }
      }
    }

    const updatedProject = await pocketDbService.updateRecord(
      'projects',
      id,
      rawData
    )

    const filter = `projectId = "${updatedProject.id}"`
    const result = await pocketDbService.findByFilter(
      COLLECTIONS.PROJECT_MEMBER_RELATION,
      filter
    )

    for await (const relation of result) {
      await pocketDbService.deleteRecord(
        COLLECTIONS.PROJECT_MEMBER_RELATION,
        relation.id
      )
    }

    if (members?.length) {
      for await (const member of members) {
        const filter = `projectId = "${updatedProject.id}" && memberId = "${member.id}"`
        const result = await pocketDbService.findByFilter(
          COLLECTIONS.PROJECT_MEMBER_RELATION,
          filter
        )
        if (result) continue
        await pocketDbService.insertRecord(
          COLLECTIONS.PROJECT_MEMBER_RELATION,
          {
            projectId: updatedProject.id,
            memberId: member.id,
          }
        )
      }
    }

    res.status(200).json(updatedProject)
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 68 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
  }
}

// Handler to delete an existing project
const deleteProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Project | {error: string}>
) => {
  try {
    const {id} = req.query
    const deletedProject = await pocketDbService.deleteRecord(
      'projects',
      id as string
    )
    res.status(200).json(deletedProject)
  } catch (error) {
    console.log('🚀 ~ file: projects.ts ~ line 86 ~ error', error)
    return res
      .status(500)
      .json({error: `Internal error: ${(error as Error).message}`})
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
  const {method} = req

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
      res.status(405).json({error: `Method ${method} Not Allowed`})
  }
}
