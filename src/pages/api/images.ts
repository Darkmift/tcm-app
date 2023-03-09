import {COLLECTIONS} from '@/const'
import {NextApiRequest, NextApiResponse} from 'next'
import fs from 'fs/promises'
import formidable, {Fields, File, Files} from 'formidable'
import path from 'path'
import checkAuthMiddleware from '../../../backend/middleware/checkIsAdmin'
import {v4 as uuid} from 'uuid'

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

    const newImage: Image = {
      id,
      title: filename,
      url: '/' + filePath.replaceAll('\\', '/'),
    }

    return res.status(201).json(newImage)
  } catch (error) {
    console.error('Error creating new image', error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const getImages = async (
  req: NextApiRequest,
  res: NextApiResponse<{images: Image[]} | {error: string}>
) => {
  try {
    const dirFiles = await fs.readdir(IMAGE_DIRECTORY)
    const images: Image[] = []

    for (const filename of dirFiles) {
      const id = filename.split('.')[0]
      const title = id // in this example, the title is the same as the image ID
      const url = filename
      images.push({id, title, url})
    }

    return res.status(200).json({images})
  } catch (error) {
    console.error('Error getting images', error)
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

    if (!Object.values(COLLECTIONS).includes(collection as string)) {
      console.log('🚀 ~ createImage ~ file: images.ts:23 ~ collection:', {
        o: Object.values(COLLECTIONS),
        collection,
      })
      return res.status(400).json({error: 'Invalid collection name'})
    }

    if (!title || !imageFile || !collection) {
      return res.status(400).json({error: 'Invalid image'})
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
        originalFilename,
      })
    }

    const filename = `${id}.`
    const storedFiles = await fs.readdir(IMAGE_DIRECTORY)
    const fileToUpdate = storedFiles.find((file) => file.includes(filename))

    if (!fileToUpdate) {
      return res.status(400).json({
        error: 'Original file not found',
        extension,
        imageFile,
        originalFilename,
      })
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

const deleteImage = async (
  req: NextApiRequest,
  res: NextApiResponse<{message: string} | {error: string; statusCode?: number}>
) => {
  try {
    const {id, collection} = req.query

    if (!Object.values(COLLECTIONS).includes(collection as string)) {
      console.log('🚀 ~ deleteImage ~ file: images.ts:134 ~ collection:', {
        o: Object.values(COLLECTIONS),
        collection,
      })
      return res.status(400).json({error: 'Invalid collectionName'})
    }

    const filename = `${id}.`
    const files = await fs.readdir(IMAGE_DIRECTORY)
    const fileToDelete = files.find((file) => file.includes(filename))

    if (!fileToDelete) {
      return res.status(404).json({error: 'Image not found'})
    }

    await fs.unlink(path.join(IMAGE_DIRECTORY, fileToDelete))

    return res
      .status(200)
      .json({message: `Image with ID ${id} deleted successfully`})
  } catch (error) {
    console.error(`Error deleting image with ID ${req.query.id}`, error)
    return res
      .status(500)
      .json({error: `Internal server error: ${(error as Error).message}`})
  }
}

const checkedCreateImage = checkAuthMiddleware(createImage)
const checkedDeleteImage = checkAuthMiddleware(deleteImage)
const checkedUpdateImage = checkAuthMiddleware(updateImage)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {method} = req

  switch (method) {
    case 'POST':
      return checkedCreateImage(req, res)
    case 'GET':
      return getImages(req, res)
    case 'PUT':
      return checkedUpdateImage(req, res)
    case 'DELETE':
      return checkedDeleteImage(req, res)
    default:
      res.setHeader('Allow', ['POST', 'GET', 'DELETE'])
      return res.status(405).json({
        error: `Method ${method} Not Allowed`,
      })
  }
}

// VV important VV
export const config = {
  api: {
    bodyParser: false,
  },
}
