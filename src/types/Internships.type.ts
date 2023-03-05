import {Instructor} from './Instructors.type'
export interface Internship {
  id: string
  name: string
  legacyId: string
  description: string
  year: number
  collectionId: string
  collectionName: string
  created: string
  updated: string
  instructors: Instructor[]
}

export interface InsertInternShip
  extends Pick<Internship, 'name' | 'description' | 'year'> {}
