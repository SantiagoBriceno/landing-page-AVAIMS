import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Notice } from '../../../../types'
import { environment } from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class NoticeFormService {
  constructor (private readonly http: HttpClient, @Inject(PLATFORM_ID) private readonly platformId: Object) {}

  createNotice (notice: Notice): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/notices`, { notice })
  }

  updateNotice (notice: Notice): Observable<any> {
    return this.http.put<any>(`${environment.API_URL}/notices`, notice)
  }

  deleteNotice (id: string): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/notices/${id}`)
  }

  saveNoticeImages (image: File): Observable<any> {
    const newFormData = new FormData()
    newFormData.append('img', image, image.name)
    return this.http.post<any>('https://avaims.com/api/v1/notices', newFormData)
  }

  deleteNoticeImages (imageName: string): Observable<any> {
    return this.http.post<any>('https://avaims.com/api/v1/notices', {
      image: imageName
    })
  }
}
