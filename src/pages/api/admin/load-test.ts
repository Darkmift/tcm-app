import type {NextApiRequest, NextApiResponse} from 'next'
import pocketDbService from '../../../../backend/services/pocketbase'
// import axios from 'axios'
import {Project} from '@/types'
import checkAuthMiddleware from '../../../../backend/middleware/checkIsAdmin'

export async function setProjectFiles() {
  try {
    const projects = await pocketDbService.getCollection('projects')

    if (!projects?.length) {
      throw new Error('not found')
    }

    const pathPrefix = '/assets/images/projects/'
    await Promise.all(
      projects.forEach(async (project: Project) => {
        const id = project.id
        delete (project as Partial<Project>).id
        if (project.image?.length) {
          const filePath = project.image
          const fileName = filePath.slice(
            (filePath as string).lastIndexOf('/') + 1
          )

          project.image = pathPrefix + fileName
        }
        await pocketDbService.updateRecord('projects', id, {...project})
      })
    )
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:120 ~ error:', error)
    return null
  }
}
export async function setInstructorsImagePath() {
  try {
    const collectionName = 'instructors'
    const dataSet = await pocketDbService.getCollection(collectionName)
    console.log(
      '🚀 ~ file: load-test.ts:40 ~ setInstructorsImagePath ~ dataSet:',
      dataSet.length
    )

    if (!dataSet?.length) {
      throw new Error('not found')
    }

    const pathPrefix = `/assets/images/${collectionName}/`
    await Promise.all(
      dataSet.forEach(async (collectionRecord: Project) => {
        const id = collectionRecord.id
        delete (collectionRecord as Partial<Project>).id
        if (collectionRecord.image?.length) {
          const filePath = collectionRecord.image
          const fileName = filePath.slice(
            (filePath as string).lastIndexOf('/') + 1
          )

          collectionRecord.image = pathPrefix + fileName
        }
        await pocketDbService.updateRecord(collectionName, id, {
          ...collectionRecord,
        })
      })
    )
  } catch (error) {
    console.log('🚀 ~ file: projectService.ts:120 ~ error:', error)
    return null
  }
}

// async function storeImage(
//   projectId: string,
//   path: string,
//   collection:string,
//   imageFileName: string
// ) {
//   const url = `http://127.0.0.1:8090/api/${collection}/${projectId}`

//   try {
//     const image = await axios.get(path, {
//       responseType: 'blob',
//       headers: {'Content-Type': 'multipart/form-data'},
//     })

//     const blobImg = new Blob([image.data], {type: 'image/jpeg'})

//     const formData = new FormData()
//     formData.append('imageFile', blobImg, 'filename.jpeg')

//     const result = await axios.patch(url, formData, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzkyMTQ2NjksImlkIjoiNTM2OXRjNWExbDJxYmxyIiwidHlwZSI6ImFkbWluIn0.bFwOAcv7aK6Q9ujKdqi1G38DrPTNjyYPl4mXlek_v8Y`,
//       },
//     })

//     return result
//   } catch (error: any) {
//     return error.message
//   }
// }

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await setInstructorsImagePath()
  res.status(200).json({name: 'Change instructor path', result})
}
export default checkAuthMiddleware(handler)
