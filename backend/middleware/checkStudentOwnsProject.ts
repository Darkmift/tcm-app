import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>

const checkStudentOwnsProject = (handler: Handler) =>
  async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    try {
      // Check if the Authorization header exists and extract the token value
      const authHeader = req.headers['authorization']
      if (!authHeader) {
        throw new Error('Authorization header not found')
      }
      const token = authHeader.replace('Bearer ', '')

      // Verify the token and retrieve the user data
      const jwtSecret = process.env.JWT_SECRET
      if (!jwtSecret) {
        throw new Error('JWT_SECRET environment variable not set')
      }
      const decoded = jwt.verify(token, jwtSecret) as {
        id: number
        role: string
        username: string
      }

      const {project} = req?.body

      const ownerId = project?.expand?.ownerId?.id

      if (!project) {
        throw new Error('project not provided')
      }

      if (decoded.id !== ownerId) {
        console.log(
          '🚀 ~ file: checkStudentOwnsProject.ts:38 ~ decoded.username !== id:',
          {du: decoded.username, ownerId}
        )
        throw new Error('user not owner of project')
      }

      // Call the original handler
      return handler(req, res)
    } catch (error) {
      console.error(error)
      return res.status(401).json({error: 'Unauthorized'})
    }
  }

export default checkStudentOwnsProject
