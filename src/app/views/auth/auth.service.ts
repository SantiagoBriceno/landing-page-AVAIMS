
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment.development'
import { isPlatformBrowser } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  login (credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(environment.API_URL + '/auth/login', { loginUser: credentials })
  }

  getToken (): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token')
    }
    return null // En el servidor, devuelve null o un valor predeterminado
  }

  setToken (token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token)
    }
  }

  removeToken (): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token')
    }
  }

  isAuthenticated (): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.getToken() !== null
    }
    return false // En el servidor, devuelve false o un valor predeterminado
  }
}
