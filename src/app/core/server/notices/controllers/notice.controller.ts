/* eslint-disable @typescript-eslint/no-misused-promises */
import { RequestHandler } from 'express'
import noticesService from '../services/notices.service'
import { Notice } from '../../config/models/types'
import { UploadedFile } from 'express-fileupload'
import fs from 'fs'

export const getAllNotices: RequestHandler = async (_req, res) => {
  try {
    const notices: Notice[] = await noticesService.getAllNotices()
    res.status(200).json({ notices })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getLastNotices: RequestHandler = async (req, res) => {
  try {
    const limit: number = parseInt(req.params.limit)
    const notices: Notice[] = await noticesService.getLastNotices(limit)
    res.status(200).json({ notices })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createNotice: RequestHandler = async (req, res) => {
  try {
    if ((req.files == null) || Object.keys(req.files).length === 0) {
      throw new Error('No files were uploaded.')
    }

    const image = req.files.img as UploadedFile
    const title = req.body.title
    const description = req.body.description
    const date = req.body.date
    const url = req.body.url
    const nameWithoutSpaces = image.name.replace(/\s/g, '')
    const savePath = `images/notices/${new Date().getTime()}${nameWithoutSpaces}`

    image.mv(`./public/${savePath}`, (error: any) => {
      if (error != null) {
        throw error
      }
    })

    const newNotice: Notice = {
      title,
      description,
      img: savePath,
      url,
      date
    }

    await noticesService.createNotice(newNotice)

    return res.json({ title, description, image: image.name })
  } catch (error) {
    return res.json(500).send(error)
  }
}

const filePath = './public/'

export const deleteNotice: RequestHandler = async (req, res) => {
  try {
    const id: number = parseInt(req.params.id)
    const file = await noticesService.getNoticeFileById(id)

    if (file.length > 0) {
      // Tenemos que borrar el archivo de la carpeta public/images/notices
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const path = `${file[0].img}`

      fs.unlink(filePath + path, (error: any) => {
        console.log(error)
      })
    }

    await noticesService.deleteNotice(id)
    res.status(200).json({ message: 'Notice deleted' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
