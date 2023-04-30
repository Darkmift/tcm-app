import {WinnerProject} from '@/types'
import {axiosInstance} from '.'

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
}

export default WinnerProjectsHttpService
