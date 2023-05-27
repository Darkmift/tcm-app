import HttpService from '@/Services/HttpService'
import StudentHttpService from '@/Services/HttpService/StudentHttpService'
import {Project} from '@/types'

export default async function processImage({
  title,
  collectionName,
  imageFile,
  studentUsername,
  studentProject,
  originalFilename,
}: {
  title: string
  collectionName: string
  imageFile: File
  studentUsername?: string
  studentProject?: Project
  originalFilename?: string
}): Promise<any> {
  try {
    if (studentUsername) {
      if (originalFilename) {
        ;(imageFile as any).imageUrlUpdate = originalFilename
      }
      return await StudentHttpService.updateStudentImage({
        title: studentUsername,
        collection: collectionName,
        file: imageFile,
        studentUsername,
        studentProject: studentProject as Project,
      })
    }
    return await HttpService.createImage(title, collectionName, imageFile)
  } catch (error: any) {
    console.log('🚀 ~ file: ProjectForm.tsx:136 ~ handleSubmit ~ error:', error)
    return null
  }
}
