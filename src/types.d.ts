export interface Notice {
  _id?: string
  title: string
  description: string
  date: Date
  img: string
  category?: string
  url?: string
  created_at?: Date
  updated_at?: Date
}

export interface Sponsor {
  id?: string
  title: string
  description: string
  url: string
  img: string
}

export interface Contact {
  _id?: string
  affair: string
  name: string
  last_name: string
  email: string
  phone: string
  message: string
  created_at?: Date
  status?: number
}

export interface Member {
  _id?: string
  nro?: string
  profession: string
  name: string
  email: string
  location: string
}
