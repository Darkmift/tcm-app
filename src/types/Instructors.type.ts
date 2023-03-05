import {Internship} from '@/types'
export type Instructor = {
  collectionId: string
  collectionName: string
  created: string
  description: string
  id: string
  image: string
  legacyId: string
  name: string
  updated: string
  year: number
  internships?: Internship
}

export interface InsertInstructor
  extends Pick<Instructor, 'name' | 'description' | 'image' | 'year'> {}
