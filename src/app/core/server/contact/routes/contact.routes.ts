import { getAllContacts, createContact } from '../controller/contact.controller'

import { Router, json } from 'express'

const router: Router = Router()

router.use(json())

router.get('/', getAllContacts)

router.post('/', createContact)

export default router
