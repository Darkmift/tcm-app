import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {Member} from '@/types'

const getAllMembers = async (
  req: NextApiRequest,
  res: NextApiResponse<Member[] | {error: string}>
) => {
  try {
    const members = await pocketDbService.getCollection('members')
    res.status(200).json(members)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: members.ts ~ line 13 ~ getAllMembers ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const createMember = async (
  req: NextApiRequest,
  res: NextApiResponse<Member | {error: string}>
) => {
  try {
    const {name, email} = req.body

    if (!name || !email) {
      return res.status(400).json({error: 'Missing name/email'})
    }

    const memberRecord = await pocketDbService.insertRecord('members', {
      name,
      email,
    })

    res.status(201).json(memberRecord)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: members.ts ~ line 33 ~ createMember ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const updateMember = async (
  req: NextApiRequest,
  res: NextApiResponse<Member | {error: string}>
) => {
  try {
    const {id} = req.query
    const {name, email} = req.body

    if (!name || !email) {
      return res.status(400).json({error: 'Missing name/email'})
    }

    const updatedMember = await pocketDbService.updateRecord(
      'members',
      id as string,
      {
        name,
        email,
      }
    )

    res.status(200).json(updatedMember)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: members.ts ~ line 58 ~ updateMember ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const deleteMember = async (
  req: NextApiRequest,
  res: NextApiResponse<Member | {error: string}>
) => {
  try {
    const {id} = req.query

    const deletedMember = await pocketDbService.deleteRecord(
      'members',
      id as string
    )

    res.status(200).json(deletedMember)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: members.ts ~ line 74 ~ deleteMember ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const checkedCreateMember = checkAuthMiddleware(createMember)
const checkedUpdateMember = checkAuthMiddleware(updateMember)
const checkedDeleteMember = checkAuthMiddleware(deleteMember)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getAllMembers(req, res)

    case 'POST':
      return checkedCreateMember(req, res)

    case 'PUT':
      return checkedUpdateMember(req, res)

    case 'DELETE':
      return checkedDeleteMember(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({
        error: `Method ${method} Not Allowed`,
        links: [],
      })
  }
}
