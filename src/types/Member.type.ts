export interface Member {
  collectionId: string
  collectionName: string
  created: string
  email: string
  id: string
  name: string
  updated: string
}

export interface InsertMember extends Pick<Member, 'email' | 'name'> {}

export type MemberInProjectRelation = {
  collectionId: string
  collectionName: string
  created: string
  id: string
  memberId: string
  projectId: string
  updated: string
}

export interface InsertMemberInProjectRelation
  extends Pick<MemberInProjectRelation, 'memberId' | 'projectId'> {}
