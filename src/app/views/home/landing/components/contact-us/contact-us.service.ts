import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Contact } from '../../../../../core/server/config/models/types'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor (private readonly http: HttpClient) {}

  sendContactUsMessage (contact: Contact): Observable<any> {
    return this.http.post<any>('/api/contact-us', { contact })
  }
}
