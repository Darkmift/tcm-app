import {AxiosResponse} from 'axios'
import {Year} from '../../types'
import {axiosInstance} from '../HttpService'

const API_YEARS_URL = `/years`

const YearHttpService = {
  // YEARS
  async getYears(): Promise<Year[]> {
    try {
      const result: AxiosResponse<{years: Year[]}, any> =
        await axiosInstance.get(API_YEARS_URL)

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data.years
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async createYear(year: Year) {
    try {
      const result: AxiosResponse<Year> = await axiosInstance.post(
        API_YEARS_URL,
        year
      )
      return result.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async updateYear(year: Year) {
    try {
      const result: AxiosResponse<Year> = await axiosInstance.put(
        `${API_YEARS_URL}?id=${year.id}`,
        year
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async deleteYear(id: string) {
    try {
      const result: AxiosResponse<Year> = await axiosInstance.delete(
        `${API_YEARS_URL}/${id}`
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

export default YearHttpService
