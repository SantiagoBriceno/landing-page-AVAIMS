import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class OurProfService {
  constructor (private readonly http: HttpClient) {}

  getAllMembers (): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/members')
  }

  getMembersPaginated (page: number, limit: number): Observable<any> {
    return this.http.get<any>(environment.API_URL + `/members/paginated?page=${page}&limit=${limit}`)
  }
}
