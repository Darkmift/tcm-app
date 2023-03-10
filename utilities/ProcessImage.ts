import HttpService from '@/Services/HttpService'

export default async function processImage(
  title: string,
  collectionName: string,
  imageFile: File
): Promise<any> {
  try {
    return await HttpService.createImage(title, collectionName, imageFile)
  } catch (error: any) {
    console.log('🚀 ~ file: ProjectForm.tsx:136 ~ handleSubmit ~ error:', error)
    return null
  }
}
