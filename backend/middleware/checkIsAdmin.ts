import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>

const checkAuthMiddleware = (handler: Handler) =>
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
      }

      // Check if the user has the "Admin" role
      if (decoded.role !== 'Admin') {
        throw new Error('User does not have permission to access this resource')
      }

      // Add the user id to the request for use by the handler
      ;(req as any).userId = decoded.id

      // Call the original handler
      return handler(req, res)
    } catch (error) {
      console.error(error)
      return res.status(401).json({error: 'Unauthorized'})
    }
  }

export default checkAuthMiddleware
