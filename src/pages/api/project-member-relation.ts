import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {MemberInProjectRelation} from '@/types'

const getAllRelations = async (
  req: NextApiRequest,
  res: NextApiResponse<MemberInProjectRelation[] | {error: string}>
) => {
  try {
    const projectId = req.query?.projectId?.toString()
    const memberId = req.query?.memberId?.toString()

    let members: MemberInProjectRelation[]

    if (projectId || memberId) {
      const filterByProject = projectId ? `projectId = "${projectId}"` : null
      const filterByMember = memberId ? `memberId = "${memberId}"` : null
      const filterString = [filterByProject, filterByMember]
        .filter((f) => f != null)
        .join(' && ')
      members = await pocketDbService.findByFilter(
        'project_member_relation',
        filterString,
        true
      )
    } else {
      members = await pocketDbService.getCollection('project_member_relation')
    }

    res.status(200).json(members)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: index.ts ~ line 14 ~ getAllMembersInProjects ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const createRecord = async (
  req: NextApiRequest,
  res: NextApiResponse<MemberInProjectRelation | {error: string}>
) => {
  try {
    const {memberId, projectId} = req.body

    if (!memberId || !projectId) {
      return res.status(400).json({error: 'Missing required fields'})
    }

    const memberRecord = await pocketDbService.insertRecord(
      'project_member_relation',
      {
        memberId,
        projectId,
      }
    )

    res.status(201).json(memberRecord)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: index.ts ~ line 39 ~ createMemberInProject ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const updateRecord = async (
  req: NextApiRequest,
  res: NextApiResponse<MemberInProjectRelation | {error: string}>
) => {
  try {
    const {id} = req.query
    const {memberId, projectId} = req.body

    if (!memberId || !projectId) {
      return res.status(400).json({error: 'Missing required fields'})
    }

    const updatedMember = await pocketDbService.updateRecord(
      'project_member_relation',
      id as string,
      {
        memberId,
        projectId,
      }
    )

    res.status(200).json(updatedMember)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: index.ts ~ line 65 ~ updateMemberInProject ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const deleteRecord = async (
  req: NextApiRequest,
  res: NextApiResponse<{success: boolean} | {error: string}>
) => {
  try {
    const {id} = req.query

    await pocketDbService.deleteRecord('project_member_relation', id as string)

    res.status(200).json({success: true})
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: index.ts ~ line 84 ~ deleteRecord ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const checkedCreateMemberInProject = checkAuthMiddleware(createRecord)
const checkedUpdateMemberInProject = checkAuthMiddleware(updateRecord)
const checkedDeleteMemberInProject = checkAuthMiddleware(deleteRecord)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getAllRelations(req, res)

    case 'POST':
      return checkedCreateMemberInProject(req, res)

    case 'PUT':
      return checkedUpdateMemberInProject(req, res)

    case 'DELETE':
      return checkedDeleteMemberInProject(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({
        error: `Method ${method} Not Allowed`,
        links: [],
      })
  }
}
