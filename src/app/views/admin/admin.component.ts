import { Component } from '@angular/core'
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component'
import { RouterOutlet } from '@angular/router'
import { HeaderAdminComponent } from './components/header-admin/header-admin.component'

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SidebarAdminComponent,
    RouterOutlet,
    HeaderAdminComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
