import {COLLECTIONS} from '@/const'
import {NextApiRequest, NextApiResponse} from 'next'
import fs from 'fs/promises'
import formidable from 'formidable'
import path from 'path'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {v4 as uuid} from 'uuid'
import checkStudentOwnsProject from '../../../backend/middleware/checkStudentOwnsProject'
import pocketDbService from '../../../backend/services/pocketbase'

const IMAGE_DIRECTORY = './public/assets/images/'
const ACCEPTED_FILE_TYPES = ['jpg', 'png']

interface Image {
  id: string
  title: string
  url: string
}

const parseForm = async (
  req: NextApiRequest
): Promise<[formidable.Fields, formidable.Files]> =>
  new Promise((resolve, reject) =>
    new formidable.IncomingForm().parse(req, (err, fields, files) =>
      err ? reject(err) : resolve([fields, files])
    )
  )

const createImage = async (
  req: NextApiRequest,
  res: NextApiResponse<any | Image | {error: string; statusCode?: number}>
) => {
  try {
    const [fields, files] = await parseForm(req)

    const {title, collection: Cname} = fields
    const {imageFile} = files as any

    const collection = Cname as string

    if (!Object.values(COLLECTIONS).includes(collection)) {
      return res.status(400).json({error: 'Invalid collection name'})
    }

    if (!title || !imageFile || !collection) {
      return res.status(400).json({error: 'Invalid image'})
    }

    const id = uuid()
    const {originalFilename} = imageFile
    if (!originalFilename) {
      throw new Error('failed processing file name')
    }
    const extension = originalFilename.split('.').pop()

    if (!extension || !ACCEPTED_FILE_TYPES.includes(extension)) {
      return res.status(400).json({
        error: 'Invalid file type',
        extension,
        imageFile,
        originalFilename,
      })
    }

    const filename = `${id}.${extension}`
    const filePath = path.join(IMAGE_DIRECTORY, collection, filename)
    const imageBuffer = await fs.readFile(imageFile.filepath)

    await fs.writeFile(filePath, imageBuffer)

    const imagePath = path.join('/assets/images/', collection, filename)

    const regex = /\\/g
    const formattedImagePath = imagePath.replace(regex, '/')

    const newImage: Image = {
      id,
      title: filename,
      url: formattedImagePath,
    }
    console.log('🚀 ~ file: images.ts:70 ~ newImage:', newImage)

    return res.status(201).json(newImage)
  } catch (error) {
    console.error('Error creating new image', error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const updateImage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {id} = req.query
    const [fields, files] = await parseForm(req)

    const {title, collection} = fields
    const {imageFile} = files as any

    if (!collection || collection !== 'projects') {
      return res.status(400).json({error: 'Invalid collection name'})
    }

    if (!title || !imageFile || !collection) {
      return res.status(400).json({error: 'Invalid image'})
    }

    console.log(
      '🚀 ~ file: student-update-image.ts:45 ~ updateImage ~ imageFile:',
      {collection, id}
    )

    const currentProject = await pocketDbService.findByFilter(
      collection,
      `id ~ "${id}"`
    )
    if (!currentProject?.id) {
      return res.status(400).json({error: 'Associated project not found'})
    }

    const {originalFilename} = imageFile

    if (!originalFilename) {
      throw new Error('failed processing file name')
    }
    const extension = originalFilename.split('.').pop()

    if (!extension || !ACCEPTED_FILE_TYPES.includes(extension)) {
      return res.status(400).json({
        error: 'Invalid file type',
        extension,
        imageFile,
      })
    }

    console.log(
      '🚀 ~ file: student-update-image.ts:45 ~ updateImage ~ imageFile:',
      {originalFilename, currentProject: currentProject.image}
    )

    const filename = `${currentProject.image.split('/').pop()}`
    const storedFiles = await fs.readdir(IMAGE_DIRECTORY + collection)
    const fileToUpdate = storedFiles.find((file) => file.includes(filename))

    console.log(
      '🚀 ~ file: student-update-image.ts:45 ~ updateImage ~ imageFile:',
      {
        originalFilename,
        currentProject: currentProject.image,
        filename,
        storedFiles,
        fileToUpdate,
      }
    )

    if (!fileToUpdate) {
      const idx = uuid()
      const filename = `${idx}.${extension}`
      const filePath = path.join(IMAGE_DIRECTORY, collection, filename)
      const imageBuffer = await fs.readFile(imageFile.filepath)

      await fs.writeFile(filePath, imageBuffer)

      const updatedImage: Image = {
        id: id as string,
        title: id as string,
        url: '/' + filePath.replaceAll('\\', '/'),
      }

      return res.status(200).json(updatedImage)
    }

    const newPath = path.join(IMAGE_DIRECTORY, fileToUpdate)
    const newFilename = `${id}.${fileToUpdate.split('.').pop()}`
    const imageBuffer = await fs.readFile(imageFile.filepath)

    await fs.rename(newPath, imageBuffer)

    const updatedImage: Image = {
      id: id as string,
      title: id as string,
      url: '/' + newFilename.replaceAll('\\', '/'),
    }

    return res.status(200).json(updatedImage)
  } catch (error) {
    console.error(`Error updating image with ID ${req.query.id}`, error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

// export default checkStudentOwnsProject(createImage)
export default createImage
// export default checkStudentOwnsProject(updateImage)

// VV important VV
export const config = {
  api: {
    bodyParser: false,
  },
}
