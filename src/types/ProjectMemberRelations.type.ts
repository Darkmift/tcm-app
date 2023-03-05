import {Member} from './Member.type'
import {Project} from './Project.type'

export type ProjectMemberRelation = {
  collectionId: string
  collectionName: string
  created: string
  id: string
  memberId: string
  projectId: string
  updated: string
  expand?: {
    memberId: Member
    projectId: Project
  }
}

export interface InsertProjectMemberRelation
  extends Pick<ProjectMemberRelation, 'memberId' | 'projectId'> {}
