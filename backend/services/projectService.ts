import {Project} from '@/types'
import pocketDbService from './pocketbase'

const COLLECTION_PROJECT_MEMBER_RELATION = 'project_member_relation'
const COLLECTION_MEMBERS = 'members'

export async function findMember(targetMember: {name: string; email: string}) {
  try {
    const memberExists = await pocketDbService.getCollection(
      COLLECTION_MEMBERS,
      {
        filter: `name = "${targetMember.name}" && email = "${targetMember.email}"`,
      }
    )

    return memberExists?.[0] || null
  } catch (error) {
    console.log('🚀 ~ file: dbService.js:54 ~ findMember ~ error:', error)
    return null
  }
}

export async function findProjectMemberRelation(relation: {
  name: string
  email: string
}) {
  try {
    const memberExists = await pocketDbService.getCollection(
      COLLECTION_PROJECT_MEMBER_RELATION,
      {
        filter: `name = "${relation.name}" && email = "${relation.email}"`,
      }
    )

    return memberExists?.[0] || null
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:36 ~ error:', error)
    return null
  }
}

export async function insertProject(project: Project) {
  try {
    const newProject = await pocketDbService.insertRecord('projects', project)

    if (!!project?.members?.length === false) {
      return newProject
    }

    const membersForProject =
      !!project?.members?.length &&
      (await Promise.all(
        project.members.map(async (m) => {
          let memberRecord = await findMember(m)
          if (memberRecord === null) {
            memberRecord = await pocketDbService.insertRecord('members', m)
          }

          if (newProject?.id && memberRecord?.id) {
            await pocketDbService.insertRecord('project_member_relation', {
              projectId: newProject.id,
              memberId: memberRecord.id,
            })
          }

          return memberRecord
        })
      ))

    console.log('🚀 ~ file: projectService.ts:67 ~ insertProject ~:', {
      newProject,
      membersForProject,
    })

    return newProject
  } catch (error) {
    console.log(
      '🚀 ~ file: projectService.ts:73 ~ insertProject ~ error:',
      error
    )
    return null
  }
}

export async function updateProjectInstructorAndInternshipIds(
  project: Project
) {
  try {
    const projectFound = await pocketDbService.getRecord('projects', project.id)

    if (!projectFound) {
      throw new Error('not found by id: ' + project.id)
    }

    const instructorFound = await pocketDbService.findByFilter(
      'instructors',
      `legacyId = "${project.legacyInstructorId}"`
    )
    const internShipFound = await pocketDbService.findByFilter(
      'internships',
      `legacyId = "${project.legacyInternshipId}"`
    )

    if (!!internShipFound?.id && !!instructorFound?.id) {
      //UPDATE
      return await pocketDbService.updateRecord('projects', project.id, {
        internshipId: internShipFound.id,
        instructorId: instructorFound.id,
      })
    } else {
      throw new Error(
        'relations lookup failed: ' +
          JSON.stringify({
            internShipFoundId: internShipFound?.id,
            instructorFoundId: instructorFound?.id,
          })
      )
    }
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:120 ~ error:', error)
    return null
  }
}
