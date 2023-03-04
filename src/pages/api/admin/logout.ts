import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    'Set-Cookie',
    `${
      process.env.COOKIE_NAME
    }=; HttpOnly; path=/; SameSite=Lax; expires=${new Date(0).toUTCString()}`
  )
  res.status(200).json({message: 'Logged out successfully'})
}
