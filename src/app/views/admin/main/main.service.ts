import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor (private readonly http: HttpClient) {}

  getAllNotices (): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/notices`)
  }

  getAllSponsors (): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/sponsors`)
  }

  getAllContacts (): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/contacts`)
  }
}
