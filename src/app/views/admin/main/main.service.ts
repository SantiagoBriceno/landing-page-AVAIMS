import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor (private readonly http: HttpClient) {}

  getAllNotices (): Observable<any> {
    return this.http.get<any>('/api/notices')
  }

  getAllSponsors (): Observable<any> {
    return this.http.get<any>('/api/sponsor')
  }

  getAllContacts (): Observable<any> {
    return this.http.get<any>('/api/contacts')
  }
}
