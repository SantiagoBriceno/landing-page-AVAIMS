import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Notice } from '../../../../../core/server/config/models/types'

@Injectable({
  providedIn: 'root'
})
export class NoticeFormService {
  constructor (private readonly http: HttpClient) {}

  createNotice (noticeFd: FormData): Observable<any> {
    return this.http.post<any>('/api/notices', noticeFd)
  }

  updateNotice (notice: Notice): Observable<any> {
    return this.http.put<any>('/api/notices', notice)
  }
}
