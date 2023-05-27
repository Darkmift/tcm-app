import {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../../backend/services/pocketbase'
import {COLLECTIONS} from '../../../const'
import checkAuthMiddleware from '../../../../backend/middleware/checkIsAdmin'
import {Project} from '@/types'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {username, password, year} = req.body
    const existingUser = await pocketDbService.findByFilter(
      COLLECTIONS.AUTH,
      `username = "${username}"`
    )

    if (existingUser) {
      throw new Error('Username already exists: ', username)
    }
    if (!username || !password || !year) {
      throw new Error('invalid credentials: ', username)
    }

    const newUser = await pocketDbService.insertRecord(COLLECTIONS.AUTH, {
      username,
      password,
      role: 'User',
    })
    if (!newUser) {
      throw new Error('user creation failed: ', username)
    }

    let targetYear = await pocketDbService.findByFilter(
      COLLECTIONS.YEARS_AUTH,
      `year=${year}`,
      false
    )

    if (!targetYear) {
      targetYear = await pocketDbService.insertRecord(COLLECTIONS.YEARS_AUTH, {
        year,
        is_enabled: false,
      })
    }
    console.log(
      '🚀 ~ file: register-student.ts:41 ~ handler ~ targetYear:',
      targetYear
    )

    const projects: Project[] = await pocketDbService.getCollection(
      COLLECTIONS.PROJECTS,
      {filter: `year=${year} && name='${username}'`}
    )

    if (!projects.length) {
      const createdProject = await pocketDbService.insertRecord(
        COLLECTIONS.PROJECTS,
        {
          name: username,
          description: 'made from CSV generated user',
          year: targetYear.year,
          ownerId: newUser.id,
        }
      )
      console.log(
        '🚀 ~ file: register-student.ts:64 ~ handler ~ createdProject:',
        createdProject
      )

      if (!createdProject)
        throw new Error(
          'project generation for student from csv failed for: ',
          username
        )
    }

    res.status(201).json({success: true, newUser})
  } catch (error) {
    console.log('🚀 ~ file: auth.ts ~ line 33 ~ register ~ error', error)
    res.status(500).json({
      payload: req.body,
      error: 'Internal server error\n\t' + (error as Error).message,
    })
  }
}

export default checkAuthMiddleware(handler)
