import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment.development'
import { Notice } from '../../../../types'

@Injectable({
  providedIn: 'root'
})
export class NoticesService {
  constructor (private readonly http: HttpClient) {}

  getNotices (): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/notices')
  }

  getNoticesYears (notices: Notice[]): number[] {
    const years = notices.map(notice => new Date(notice.date).getFullYear())
    return [...new Set(years)].sort((a, b) => a - b) // Ordenar los años de menor a mayor
  }
}
