import {NextApiRequest, NextApiResponse} from 'next'
import {ApiProjectEntry, Project} from '@/types'
import pocketDbService from '../../../backend/services/pocketbase'
import {COLLECTIONS} from '@/const'
import checkStudentOwnsProject from '../../../backend/middleware/checkStudentOwnsProject'

// Handler to update an existing project
const StudentProjectEdit = async (
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
      filter,
      true
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

export default checkStudentOwnsProject(StudentProjectEdit)
