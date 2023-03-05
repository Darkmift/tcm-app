import {InsertInternShip, Internship} from '../../types'
import {axiosInstance} from '../HttpService'

const API_INTERNSHIPS_URL = `/internships`

const InternShipsHttpService = {
  // INTERNSHIPS
  async getAllInternships(): Promise<Internship[]> {
    try {
      const response = await axiosInstance.get(API_INTERNSHIPS_URL)
      return response.data.internships
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createInternship(internship: InsertInternShip): Promise<Internship> {
    try {
      const response = await axiosInstance.post(API_INTERNSHIPS_URL, internship)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateInternship(internship: Internship): Promise<Internship> {
    try {
      const response = await axiosInstance.put(API_INTERNSHIPS_URL, internship)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async deleteInternship(id: string): Promise<Internship> {
    try {
      const response = await axiosInstance.delete(
        `${API_INTERNSHIPS_URL}?id=${id}`
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default InternShipsHttpService
