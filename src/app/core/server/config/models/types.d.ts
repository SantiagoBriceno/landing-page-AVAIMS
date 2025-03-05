export interface Notice {
  id: number
  title: string
  description: string
  date: Date
  img: string
  created_at: Date
  updated_at: Date
}

export interface Sponsor {
  id: number
  title: string
  description: string
  img: string
  url: string
}

export interface Contact {
  affair: string
  name: string
  lastName: string
  email: string
  phone: string
  message: string
  created_at?: Date
}
