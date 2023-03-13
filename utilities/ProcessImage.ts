import HttpService from '@/Services/HttpService'
import StudentHttpService from '@/Services/HttpService/StudentHttpService'

export default async function processImage(
  title: string,
  collectionName: string,
  imageFile: File,
  studentUsername?: string,
  originalFilename?: string
): Promise<any> {
  console.log('🚀 ~ file: ProcessImage.ts:10 ~ imageFile:', imageFile)
  try {
    if (studentUsername) {
      if (originalFilename) {
        ;(imageFile as any).imageUrlUpdate = originalFilename
      }
      return await StudentHttpService.updateStudentImage(
        studentUsername,
        collectionName,
        imageFile,
        studentUsername
      )
    }
    return await HttpService.createImage(title, collectionName, imageFile)
  } catch (error: any) {
    console.log('🚀 ~ file: ProjectForm.tsx:136 ~ handleSubmit ~ error:', error)
    return null
  }
}
