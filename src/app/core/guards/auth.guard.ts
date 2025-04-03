import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../../views/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private readonly authService: AuthService, private readonly router: Router) {}

  canActivate (): boolean {
    if (this.authService.isAuthenticated()) {
      return true
    } else {
      void this.router.navigate(['/home'])
      return false
    }
  }
}
