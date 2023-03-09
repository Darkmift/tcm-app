import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../../backend/services/pocketbase'
import {COLLECTIONS} from '../../../const'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {username, password} = req.body
    const existingUser = await pocketDbService.findByFilter(
      COLLECTIONS.AUTH,
      `username = "${username}"`
    )

    if (existingUser) {
      return res.status(409).json({error: 'Username already exists'})
    }
    if (!username || !password) {
      return res.status(409).json({
        errorMsg: 'invalid credentials',
        credetials: {username, password},
      })
    }

    const newUser = await pocketDbService.insertRecord(COLLECTIONS.AUTH, {
      username,
      password,
      role: 'User',
    })

    res.status(201).json({success: true, newUser})
  } catch (error) {
    console.log('🚀 ~ file: auth.ts ~ line 33 ~ register ~ error', error)
    res
      .status(500)
      .json({errorMsg: 'Internal server error\n\t' + (error as Error).message})
  }
}
