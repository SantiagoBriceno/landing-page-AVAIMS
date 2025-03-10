import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Contact } from '../../../../../../types'
import { environment } from '../../../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor (private readonly http: HttpClient) {}

  sendContactUsMessage (contact: Contact): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/contacts`, { contact })
  }
}
