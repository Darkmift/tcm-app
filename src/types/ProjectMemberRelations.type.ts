export type ProjectMemberRelation = {
  collectionId: string,
  collectionName: string,
  created: string,
  id: string,
  memberId: string,
  projectId: string,
  updated: string
}


export interface InsertMemberInProjectRelation
  extends Pick<ProjectMemberRelation, 'memberId' | 'projectId'> {}
