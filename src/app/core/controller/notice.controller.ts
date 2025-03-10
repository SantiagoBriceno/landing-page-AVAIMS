/* eslint-disable @typescript-eslint/no-misused-promises */
import { RequestHandler } from 'express'
import { UploadedFile } from 'express-fileupload'

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
