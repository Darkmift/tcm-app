import {COLLECTIONS, VALID_YEAR_REGEX} from '../../const'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {year} = req.query

    if (VALID_YEAR_REGEX.test(year as string) === false) {
      return res.status(404).json({error: 'Invalid Year'})
    }

    const yearData = await pocketDbService.findByFilter(
      COLLECTIONS.YEARS_AUTH,
      `year = ${year}`
    )

    if (yearData.is_enabled === false) {
      return res.status(401).json({error: 'Year not enabled by admin'})
    }

    const projects = await pocketDbService.findByFilter(
      COLLECTIONS.PROJECTS,
      `year = ${year}`,
      true,
      {expand: 'instructorId,internshipId'}
    )

    const instructors = await pocketDbService.findByFilter(
      COLLECTIONS.INSTRUCTORS,
      `year = ${year}`,
      true
    )

    const internships = await pocketDbService.findByFilter(
      COLLECTIONS.INTERNSHIPS,
      `year = ${year}`,
      true
    )

    const members = await pocketDbService.getCollection(COLLECTIONS.MEMBERS)
    const projectMemberRelation = await pocketDbService.getCollection(
      COLLECTIONS.PROJECT_MEMBER_RELATION
    )

    res.status(200).send({
      yearData,
      instructors,
      internships,
      members,
      projects,
      projectMemberRelation,
    })
  } catch (error) {
    console.log('🚀 ~ file: metadata.ts:45 ~ error:', error)
    return res
      .status(500)
      .json({error: 'internal error: ' + (error as Error).message})
  }
}
