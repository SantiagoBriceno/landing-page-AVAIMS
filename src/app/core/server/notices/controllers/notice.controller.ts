import { RequestHandler } from 'express'
import noticesService from '../services/notices.service'
import { Notice } from '../../config/models/types'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getAllNotices: RequestHandler = async (_req, res) => {
  try {
    const notices: Notice[] = await noticesService.getAllNotices()
    res.status(200).json({ notices })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getLastNotices: RequestHandler = async (req, res) => {
  try {
    const limit: number = parseInt(req.params['limit'])
    const notices: Notice[] = await noticesService.getLastNotices(limit)
    res.status(200).json({ notices })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
