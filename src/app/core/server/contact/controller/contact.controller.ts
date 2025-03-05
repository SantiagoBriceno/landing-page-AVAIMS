/* eslint-disable @typescript-eslint/no-misused-promises */
import { RequestHandler } from 'express'
import contactService from '../service/contact.service'
import { Contact } from '../../config/models/types'

export const getAllContacts: RequestHandler = async (_req, res) => {
  try {
    const contacts = await contactService.getAllContacts()
    res.status(200).json({ contacts })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createContact: RequestHandler = async (req, res) => {
  try {
    const contact: Contact = req.body.contact
    const result = await contactService.createContact(contact)
    res.status(201).json({ result })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}
