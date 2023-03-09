import {axiosInstance} from '../HttpService'

interface Image {
  id: string
  title: string
  url: string
}

const API_IMAGES_URL = `/images`

const ImageHttpService = {
  async getAllImages(): Promise<Image[]> {
    const response = await axiosInstance.get(API_IMAGES_URL)
    return response.data.images
  },

  async createImage(
    title: string,
    collection: string,
    file: File
  ): Promise<Image> {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('collection', collection)
    formData.append('imageFile', file)

    const response = await axiosInstance.post(API_IMAGES_URL, formData, {
      headers: {'Content-Type': 'multipart/form-data'},
    })
    return response.data
  },

  async updateImage(
    id: string,
    title: string,
    collection: string,
    file: File
  ): Promise<Image> {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('collection', collection)
    formData.append('imageFile', file)

    const response = await axiosInstance.put(
      `${API_IMAGES_URL}/${id}`,
      formData,
      {
        headers: {'Content-Type': 'multipart/form-data'},
      }
    )
    return response.data
  },

  async deleteImage(id: string, collection: string): Promise<string> {
    const response = await axiosInstance.delete(
      `${API_IMAGES_URL}/${id}?collection=${collection}`
    )
    return response.data.message
  },
}

export default ImageHttpService
