import {InsertWinnerProjectType, WinnerProjectType} from '@/types'
import {axiosInstance} from '.'

const API_WINNER_PROJECT_TYPES_URL = '/winner-project-types'

const WinnerProjectTypeHttpService = {
  async getAllWinnerProjectTypes(): Promise<WinnerProjectType[]> {
    try {
      const response = await axiosInstance.get(API_WINNER_PROJECT_TYPES_URL)
      return response.data.winnerProjectTypes
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createWinnerProjectType(
    winnerProjectType: InsertWinnerProjectType
  ): Promise<WinnerProjectType> {
    try {
      const response = await axiosInstance.post(
        API_WINNER_PROJECT_TYPES_URL,
        winnerProjectType
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateWinnerProjectType(
    winnerProjectType: WinnerProjectType
  ): Promise<WinnerProjectType> {
    try {
      const response = await axiosInstance.put(
        `${API_WINNER_PROJECT_TYPES_URL}?id=${winnerProjectType.id}`,
        winnerProjectType
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async deleteWinnerProjectType(id: string): Promise<WinnerProjectType> {
    try {
      const response = await axiosInstance.delete(
        `${API_WINNER_PROJECT_TYPES_URL}?id=${id}`
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default WinnerProjectTypeHttpService
