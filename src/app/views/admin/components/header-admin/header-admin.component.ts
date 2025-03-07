import { Component } from '@angular/core'

@Component({
  selector: 'app-header-admin',
  imports: [],
  standalone: true,
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  user = {
    name: 'Santiago Briceño',
    role: 'Administrador'
  }
}
