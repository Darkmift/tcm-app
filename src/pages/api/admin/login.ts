import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../../backend/services/pocketbase'
import {COLLECTIONS} from '../../../const'
import {compare} from 'bcrypt'
import {Secret, sign} from 'jsonwebtoken'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {username, password} = req.body
    const user = await pocketDbService.findByFilter(
      COLLECTIONS.AUTH,
      `username = "${username}"`
    )

    if (!user) {
      return res.status(401).json({error: 'Invalid credentials'})
    }

    const isValidPassword = await compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({error: 'Invalid credentials'})
    }

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
    }

    const token = sign(payload, process.env.JWT_SECRET as Secret)

    res.setHeader(
      'Set-Cookie',
      `${
        process.env.COOKIE_NAME
      }=${token}; HttpOnly; path=/; SameSite=Lax; expires=${new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 7 // 1 week
      ).toUTCString()}`
    )

    res.status(200).json({...payload, token})
  } catch (error) {
    console.log('🚀 ~ file: auth.ts ~ line 13 ~ login ~ error', error)
    res.status(500).json({error: 'Internal server error'})
  }
}
