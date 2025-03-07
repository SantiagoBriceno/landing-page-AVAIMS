import { Router } from 'express'
import { createNotice, deleteNotice, getAllNotices, getLastNotices } from '../controllers/notice.controller'
import fileUpload from 'express-fileupload'

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
  createNotice
)

router.delete('/:id', deleteNotice)

export default router
