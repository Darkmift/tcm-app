import fs from 'fs'
import type {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../backend/services/pocketbase'
import axios from 'axios'

export async function setProjectFiles() {
  try {
    const projects = await pocketDbService.getCollection('projects')
    
    if (!projects?.length) {
      throw new Error('not found')
    }
    
    const projectId = 'tim51psw1olaxgv' // Replace with your actual project ID
    const pathPrefix = 'http://localhost:3000/projects'

    // Example usage:
    return await storeImage(projectId, `${pathPrefix}/513.jpg`, '513.jpg')

    // const pathImg = 'original/app/db/2022/storage/projects'
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:120 ~ error:', error)
    return null
  }
}

async function storeImage(
  projectId: string,
  path: string,
  imageFileName: string
) {
  const url = `http://127.0.0.1:8090/api/projects/${projectId}`

  try {
    const image = await axios.get(path, {
      responseType: 'blob',
      headers: {'Content-Type': 'multipart/form-data'},
    })

    const blobImg = new Blob([image.data], {type: 'image/jpeg'})

    const formData = new FormData()
    formData.append('imageFile', blobImg, 'filename.jpeg')

    const result = await axios.patch(url, formData, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzkyMTQ2NjksImlkIjoiNTM2OXRjNWExbDJxYmxyIiwidHlwZSI6ImFkbWluIn0.bFwOAcv7aK6Q9ujKdqi1G38DrPTNjyYPl4mXlek_v8Y`,
      },
    })

    return result
  } catch (error: any) {
    return error.message
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({name: 'John Doe', durr: await setProjectFiles()})
}
