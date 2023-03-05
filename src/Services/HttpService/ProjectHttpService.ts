import {Project} from '../../types'
import {axiosInstance} from '../HttpService'

const API_PROJECTS_URL = `/projects`

const ProjectHttpService = {
  async getAllProjects(selectedYear: number): Promise<Project[]> {
    try {
      const response = await axiosInstance.get(
        `${API_PROJECTS_URL}?year=${selectedYear}`
      )
      return response.data.projects
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createProject(project: Project): Promise<Project> {
    try {
      const response = await axiosInstance.post(API_PROJECTS_URL, project)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateProject(project: Project): Promise<Project> {
    try {
      const response = await axiosInstance.put(API_PROJECTS_URL, project)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async deleteProject(id: string): Promise<Project> {
    try {
      const response = await axiosInstance.delete(
        `${API_PROJECTS_URL}?id=${id}`
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default ProjectHttpService
