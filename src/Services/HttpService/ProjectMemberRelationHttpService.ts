import {InsertProjectMemberRelation, ProjectMemberRelation} from '@/types'
import {axiosInstance} from './index'

const API_MEMBER_RELATION_URL = '/project-member-relation'

const ProjectMemberRelationHttpService = {
  async getAllProjectMemberRelations(): Promise<ProjectMemberRelation[]> {
    try {
      const response = await axiosInstance.get(API_MEMBER_RELATION_URL)
      return response.data.projectMemberRelations
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createProjectMemberRelation(
    relation: InsertProjectMemberRelation
  ): Promise<ProjectMemberRelation> {
    try {
      const response = await axiosInstance.post(
        API_MEMBER_RELATION_URL,
        relation
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateProjectMemberRelation(
    relation: ProjectMemberRelation
  ): Promise<ProjectMemberRelation> {
    try {
      const response = await axiosInstance.put(
        API_MEMBER_RELATION_URL,
        relation
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async deleteProjectMemberRelation(
    id: string
  ): Promise<ProjectMemberRelation> {
    try {
      const response = await axiosInstance.delete(
        `${API_MEMBER_RELATION_URL}?id=${id}`
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default ProjectMemberRelationHttpService
