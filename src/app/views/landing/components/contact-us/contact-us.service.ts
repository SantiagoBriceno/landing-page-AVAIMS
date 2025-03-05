import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor (private readonly http: HttpClient) {}

  sendContactUsMessage (message: any): Observable<any> {
    return this.http.post<any>('/api/contact-us', message)
  }
}
