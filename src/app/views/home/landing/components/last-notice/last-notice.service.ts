import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class LastNoticeService {
  constructor (private readonly http: HttpClient) {}

  getNotices (): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/notices/3')
  }
}
