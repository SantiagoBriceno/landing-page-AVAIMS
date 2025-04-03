/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { RequestHandler } from 'express'
import { UploadedFile } from 'express-fileupload'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const saveNoticeImages: RequestHandler = async (req, res) => {
  try {
    if ((req.files == null) || Object.keys(req.files).length === 0) {
      throw new Error('No files were uploaded.')
    }

    const image = req.files.img as UploadedFile
    const nameWithoutSpaces = image.name.replace(/\s/g, '')
    const savePath = `images/notices/${new Date().getTime()}${nameWithoutSpaces}`

    image.mv(`./public/${savePath}`, (error: any) => {
      if (error != null) {
        throw error
      }
    })

    return res.json({ image: savePath })
  } catch (error) {
    console.log(error)
    return res.json(500).send(error)
  }
}

export const deleteNoticeImages: RequestHandler = async (req, res, next) => {
  const { image } = req.body
  console.log('Image to delete:', image)
  try {
    if (image == null || image === undefined) {
      throw new Error('No files were uploaded.')
    }

    const fullPathToDelete = path.join(__dirname, '../../../public', image)

    if (!fs.existsSync(fullPathToDelete)) {
      throw new Error('File does not exist')
    }

    fs.unlinkSync(fullPathToDelete)

    res.json({ message: 'Image deleted successfully' })
  } catch (error) {
    next(error)
  }
}
