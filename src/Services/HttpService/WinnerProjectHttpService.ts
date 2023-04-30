import {InsertWinnerProject} from './../../types/WinnerProject.type'
import {WinnerProject} from '@/types'
import {axiosInstance} from '.'
import {AxiosResponse} from 'axios'

const API_WINNER_PROJECTS_URL = '/winner-projects'

const WinnerProjectsHttpService = {
  async getAllWinnerProjects(): Promise<WinnerProject[]> {
    try {
      const response = await axiosInstance.get(API_WINNER_PROJECTS_URL)
      return response.data.winnerProjects
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async addWinnerProject(
    winnerProject: InsertWinnerProject
  ): Promise<WinnerProject | null> {
    try {
      const result: AxiosResponse<any, any> = await axiosInstance.post(
        API_WINNER_PROJECTS_URL,
        winnerProject
      )

      if (!result?.data) {
        throw new Error('registration failed')
      }

      return result.data
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ register ~ error', error)
      return null
    }
  },
  async updateWinnerProject(WinnerProject: WinnerProject) {
    try {
      const result: AxiosResponse<WinnerProject> = await axiosInstance.put(
        `${API_WINNER_PROJECTS_URL}?id=${WinnerProject.id}`,
        WinnerProject
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async deleteWinnerProject(id: string) {
    try {
      const result: AxiosResponse<WinnerProject> = await axiosInstance.delete(
        `${API_WINNER_PROJECTS_URL}?id=${id}`
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default WinnerProjectsHttpService
