import { Component } from '@angular/core'
import { AuthService } from '../../../auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-admin',
  imports: [],
  standalone: true,
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  constructor (private readonly authService: AuthService, private readonly router: Router) {}
  user = {
    name: 'AVAIMS 2025',
    role: 'Administrador'
  }

  logout (): void {
    this.authService.removeToken()
    void this.router.navigate(['/home'])
  }
}
