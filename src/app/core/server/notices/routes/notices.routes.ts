import { Router } from 'express'
import { getAllNotices, getLastNotices } from '../controllers/notice.controller'

const router: Router = Router()

router.get('/', getAllNotices)

router.get('/:limit', getLastNotices)

export default router
