import { Router } from 'express'
import { getAllSponsors } from '../controllers/sponsor.controller'

const router: Router = Router()

router.get('/', getAllSponsors)

export default router
