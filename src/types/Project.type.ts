import {AuthUser} from './index'
import {Internship, Year} from '@/types'
import {Instructor} from './Instructors.type'
import {Member} from './Member.type'

export type Project = {
  collectionId: string
  collectionName: string
  created: string
  description: string
  id: string
  image: string | File
  imageUrl?: string
  instructorId: string | Instructor
  internshipId: string | Internship
  legacyId: string
  legacyProjectId: string
  legacyInstructorId: string
  legacyInternshipId: string
  name: string
  updated: string
  year: number | Year
  //might be hydrated
  members?: Member[]
  expand?: {
    instructorId: Instructor
    ownerId: AuthUser
    internshipId: Internship
  }
}

export interface InsertOrUpdateProject
  extends Pick<Project, 'description' | 'image' | 'name' | 'year'> {
  members?: Member[]
  instructorId?: string
  internshipId?: string
}
export interface ApiProjectEntry
  extends Pick<Project, 'description' | 'image' | 'name'> {
  id?: string
  members?: Member[]
  instructorId?: Instructor
  internshipId?: Internship
  year: Year
}
