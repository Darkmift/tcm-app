import {Project} from './Project.type'

export type WinnerProject = {
  expand: {projectId: Project}
  id: string
  projectId: string
  title: string
  year: string
}

export interface InsertWinnerProject
  extends Pick<WinnerProject, 'projectId' | 'title' | 'year'> {}
