import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-sidebar-mobile',
  imports: [],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss'
})
export class SidebarMobileComponent {
  @Input() isOpen: boolean = false
}
