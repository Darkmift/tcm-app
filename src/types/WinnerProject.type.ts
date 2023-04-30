import {Project} from './Project.type'

export type WinnerProject = {
  expand: {projectId: Project}
  id: string
  title: string
  year: string
}
