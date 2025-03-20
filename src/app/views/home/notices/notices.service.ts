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

  getNoticesYearsAndCategories (notices: Notice[]): { years: number[], categories: string[] } {
    const years = new Set<number>()
    const categories = new Set<string>()
    notices.forEach(notice => {
      years.add(new Date(notice.date).getFullYear())
      if (notice.category !== undefined) {
        categories.add(notice.category)
      }
    })

    return {
      years: Array.from(years).sort((a, b) => a - b),
      categories: [...categories]
    }
  }
}
