import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OurSponsorsService {
  constructor (private readonly http: HttpClient) {}

  getSponsors (): Observable<any> {
    return this.http.get<any>('/api/sponsor')
  }
}
