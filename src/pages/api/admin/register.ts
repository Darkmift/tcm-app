import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../../backend/services/pocketbase'
import {COLLECTIONS} from '../../../const'
import {hash} from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {username, password, role} = req.body
    const existingUser = await pocketDbService.findByFilter(
      COLLECTIONS.AUTH,
      `username = "${username}"`
    )

    if (existingUser) {
      return res.status(409).json({error: 'Username already exists'})
    }
    if (!username || !password || ['User', 'Admin'].includes(role) === false) {
      return res.status(409).json({
        errorMsg: 'invalid credentials',
        credetials: {username, password, role},
      })
    }

    const hashedPassword = await hash(password, 10)
    const newUser = await pocketDbService.insertRecord(COLLECTIONS.AUTH, {
      username,
      password: hashedPassword,
      role,
    })

    res.status(201).json({success: true, newId: newUser.id})
  } catch (error) {
    console.log('🚀 ~ file: auth.ts ~ line 33 ~ register ~ error', error)
    res
      .status(500)
      .json({errorMsg: 'Internal server error\n\t' + (error as Error).message})
  }
}
