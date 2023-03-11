import {Instructor} from '../../types'
import {axiosInstance} from '../HttpService'

const API_INSTRUCTORS_URL = `/instructors`

const InstructorsHttpService = {
  async getAllInstructors(selectedYear: number): Promise<Instructor[]> {
    try {
      const response = await axiosInstance.get(
        `${API_INSTRUCTORS_URL}?year=${selectedYear}`
      )
      return response.data.instructors
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createInstructor(instructor: Instructor): Promise<Instructor> {
    try {
      const response = await axiosInstance.post(API_INSTRUCTORS_URL, instructor)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateInstructor(instructor: Instructor): Promise<Instructor> {
    try {
      const response = await axiosInstance.put(
        `${API_INSTRUCTORS_URL}?id=${instructor.id}`,
        instructor
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async deleteInstructor(id: string): Promise<Instructor> {
    try {
      const response = await axiosInstance.delete(
        `${API_INSTRUCTORS_URL}?id=${id}`
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default InstructorsHttpService
