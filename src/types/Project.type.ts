import {Internship} from '@/types'
import {Instructor} from './Instructors.type'
import {Member} from './Member.type'

export type Project = {
  collectionId: string
  collectionName: string
  created: string
  description: string
  id: string
  image: string
  instructorId: string
  internshipId: string
  legacyId: string
  legacyProjectId: string
  legacyInstructorId: string
  legacyInternshipId: string
  name: string
  updated: string
  year: number
  //might be hydrated
  members?: Member[]
  expand?: {
    instructorId: Instructor
    internshipId: Internship
  }
}

export interface InsertOrUpdateProject
  extends Pick<Project, 'description' | 'image' | 'name' | 'year'> {
  members?: Member[]
  instructorId?: string
  internshipId?: string
}
