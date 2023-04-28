import {COLLECTIONS} from './../../const'
import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {Member as Media, NewMedia} from '@/types'

const getAllMedia = async (
  req: NextApiRequest,
  res: NextApiResponse<Media[] | {error: string}>
) => {
  try {
    const Media = await pocketDbService.getCollection(COLLECTIONS.MEDIA)
    res.status(200).json(Media)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: Media.ts ~ line 13 ~ getAllMedia ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const createMedia = async (
  req: NextApiRequest,
  res: NextApiResponse<NewMedia | {error: string}>
) => {
  try {
    const {url, desc, heading} = req.body

    if (!url || !heading) {
      return res.status(400).json({error: 'Missing url/heading'})
    }

    const memberRecord = await pocketDbService.insertRecord(COLLECTIONS.MEDIA, {
      url,
      desc,
      heading,
    })

    res.status(201).json(memberRecord)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: Media.ts ~ line 33 ~ createMember ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const updateMedia = async (
  req: NextApiRequest,
  res: NextApiResponse<{id: string; url: string} | {error: string}>
) => {
  try {
    const {id} = req.query
    const {url, desc, heading} = req.body

    if (!url || !heading) {
      return res.status(400).json({error: 'Missing url/heading'})
    }

    const updatedMember = await pocketDbService.updateRecord(
      COLLECTIONS.MEDIA,
      id as string,
      {
        url,
        desc,
        heading,
      }
    )

    res.status(200).json(updatedMember)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: Media.ts ~ line 58 ~ updateMedia ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const deleteMedia = async (
  req: NextApiRequest,
  res: NextApiResponse<Media | {error: string}>
) => {
  try {
    const {id} = req.query

    const deletedMedia = await pocketDbService.deleteRecord(
      COLLECTIONS.MEDIA,
      id as string
    )

    res.status(200).json(deletedMedia)
  } catch (error) {
    console.error(
      '🚀 ~ error ~ file: Media.ts ~ line 74 ~ deleteMedia ~ error',
      error
    )
    res.status(500).json({error: `Internal error: ${(error as Error).message}`})
  }
}

const checkedCreateMember = checkAuthMiddleware(createMedia)
const checkedUpdateMember = checkAuthMiddleware(updateMedia)
const checkedDeleteMember = checkAuthMiddleware(deleteMedia)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'GET':
      return getAllMedia(req, res)

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
