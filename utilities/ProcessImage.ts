import HttpService from '@/Services/HttpService'
import StudentHttpService from '@/Services/HttpService/StudentHttpService'

export default async function processImage(
  title: string,
  collectionName: string,
  imageFile: File,
  studentUsername?: string
): Promise<any> {
  console.log("🚀 ~ file: ProcessImage.ts:10 ~ imageFile:", imageFile)
  try {
    if (studentUsername) {
      return await StudentHttpService.updateStudentImage(
        title,
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
