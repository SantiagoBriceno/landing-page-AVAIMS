import { RequestHandler } from 'express'
import sponsorService from '../services/sponsor.service'
import { Sponsor } from '../../config/models/types'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getAllSponsors: RequestHandler = async (_req, res) => {
  try {
    const sponsors: Sponsor[] = await sponsorService.getAllSponsors()
    res.status(200).json({ sponsors })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
