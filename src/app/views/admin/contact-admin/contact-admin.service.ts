import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ContactAdminService {
  constructor (private readonly http: HttpClient) {}

  getAllContacts (): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/contacts`)
  }

  updateContactStatus (id: string = ''): Observable<any> {
    return this.http.patch<any>(`${environment.API_URL}/contacts/${id}`, { status: 1 })
  }
}
