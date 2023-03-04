import {COLLECTIONS} from '../../const'
import type {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const years = await pocketDbService.getCollection(COLLECTIONS.YEARS_AUTH)

    res.status(200).send({years})
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error)
    return res
      .status(500)
      .json({error: 'internal error: ' + (error as Error).message})
  }
}
