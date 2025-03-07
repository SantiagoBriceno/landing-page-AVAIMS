import { Router } from 'express'
import { getAllNotices, getLastNotices } from '../controllers/notice.controller'
import fileUpload, { UploadedFile } from 'express-fileupload'
import { Notice } from '../../config/models/types'
import noticesService from '../services/notices.service'

const router: Router = Router()

router.get('/', getAllNotices)

router.get('/:limit', getLastNotices)

router.post(
  '/',
  fileUpload({
    createParentPath: true
    // limits: { fileSize: 2 * 1024 * 1024 },
    // safeFileNames: true,
    // preserveExtension: true
  }),
  (req, res) => {
    try {
      if ((req.files == null) || Object.keys(req.files).length === 0) {
        throw new Error('No files were uploaded.')
      }

      const image = req.files['img'] as UploadedFile
      const title = req.body.title
      const description = req.body.description
      const date = req.body.date
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
        date
      }

      const result = noticesService.createNotice(newNotice)

      return res.json({ title, description, image: image.name })
    } catch (error) {
      return res.json(500).send(error)
    }
  }
)

export default router
