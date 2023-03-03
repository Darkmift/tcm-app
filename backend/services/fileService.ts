import {promises as fs} from 'fs'

export async function writeFile(filePath: string, content: string) {
  try {
    await fs.writeFile(filePath, content)
    console.log(`Successfully wrote to ${filePath}`)
  } catch (error) {
    console.log('🚀 ~ file: fileService.js:8 ~ writeFile ~ error:', {
      filePath,
      error,
    })
    // console.error(`Error writing to ${filePath}: ${error}`);
  }
}
