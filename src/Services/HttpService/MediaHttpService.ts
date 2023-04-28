import {NewMedia} from './../../types/index'
import {Media} from '@/types'
import {AxiosResponse} from 'axios'

import {axiosInstance} from '.'

const API_Media_URL = `/media`

const MediaHttpService = {
  // Media
  async getMedia(): Promise<Media[]> {
    try {
      const result: AxiosResponse<{Media: Media[]}, any> =
        await axiosInstance.get(API_Media_URL)

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data as unknown as Media[]
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async createMedia(media: NewMedia) {
    try {
      const result: AxiosResponse<Media> = await axiosInstance.post(
        API_Media_URL,
        media
      )
      if (!result.data) throw new Error('error creating media')
      return result.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async updateMedia(Media: Media) {
    try {
      const result: AxiosResponse<Media> = await axiosInstance.put(
        `${API_Media_URL}?id=${Media.id}`,
        Media
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async deleteMedia(id: string) {
    try {
      const result: AxiosResponse<Media> = await axiosInstance.delete(
        `${API_Media_URL}/${id}`
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

export default MediaHttpService
