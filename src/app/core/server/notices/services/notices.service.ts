import { QueryResult } from 'mysql2'
import { pool } from '../../config/db/db'
import { Notice } from '../../config/models/types'

const getAllNotices = async (): Promise<Notice[]> => {
  const [rows] = await pool.query('SELECT * FROM notices')
  return rows as Notice[]
}

const getLastNotices = async (limit: number): Promise<Notice[]> => {
  const [rows] = await pool.query('SELECT * FROM notices ORDER BY id DESC LIMIT ?', [limit])
  return rows as Notice[]
}

const getNoticeFileById = async (id: number): Promise<any> => {
  const [rows] = await pool.query('SELECT img FROM notices WHERE id = ?', [id])
  return rows
}

const createNotice = async (notice: Notice): Promise<QueryResult> => {
  const [rows] = await pool.query('INSERT INTO notices SET ?', [notice])
  return rows
}

const deleteNotice = async (id: number): Promise<QueryResult> => {
  const [rows] = await pool.query('DELETE FROM notices WHERE id = ?', [id])
  return rows
}

export default {
  getAllNotices,
  getLastNotices,
  getNoticeFileById,
  createNotice,
  deleteNotice
}
