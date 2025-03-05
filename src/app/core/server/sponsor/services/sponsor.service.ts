import { pool } from '../../config/db/db'
import { Sponsor } from '../../config/models/types'

const getAllSponsors = async (): Promise<Sponsor[]> => {
  const [rows] = await pool.query('SELECT * FROM sponsor')
  return rows as Sponsor[]
}

export default {
  getAllSponsors
}
