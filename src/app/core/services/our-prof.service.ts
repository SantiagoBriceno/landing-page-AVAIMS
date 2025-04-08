import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment.development'
import { Member } from '../../../types'

@Injectable({
  providedIn: 'root'
})
export class OurProfService {
  constructor (private readonly http: HttpClient) {}

  getAllMembers (): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/members')
  }

  getMembersPaginated (page: number, limit: number, filter: string = ''): Observable<any> {
    return this.http.get<any>(environment.API_URL + `/members/paginated?page=${page}&limit=${limit}&filter=${filter}`)
  }

  createMember (member: Member): Observable<any> {
    return this.http.post<any>(environment.API_URL + '/members', { newMember: member })
  }

  updateMember (member: Member, id: string): Observable<any> {
    return this.http.patch<any>(environment.API_URL + `/members/${id}`, { newMember: member })
  }

  deleteMember (id: string): Observable<any> {
    return this.http.delete<any>(environment.API_URL + `/members/${id}`)
  }
}
