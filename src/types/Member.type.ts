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