import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LastNoticeService {
  constructor (private readonly http: HttpClient) {}

  getNotices (): Observable<any> {
    return this.http.get<any>('/api/notices/3')
  }
}
