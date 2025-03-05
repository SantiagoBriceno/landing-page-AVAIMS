import { QueryResult } from 'mysql2/promise'
import { pool } from '../../config/db/db'
import { Contact } from '../../config/models/types'

const getAllContacts = async (): Promise<Contact[]> => {
  const [rows] = await pool.query('SELECT * FROM contacts')
  return rows as Contact[]
}

const createContact = async (contact: Contact): Promise<QueryResult> => {
  const [rows] = await pool.query('INSERT INTO contacts SET ?', contact)
  return rows
}

export default {
  getAllContacts,
  createContact
}
