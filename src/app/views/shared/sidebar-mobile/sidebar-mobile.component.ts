import { Component, Input, Output, EventEmitter } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-sidebar-mobile',
  imports: [
    RouterModule
  ],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss'
})
export class SidebarMobileComponent {
  @Input() isOpen: boolean = false
  @Output() close = new EventEmitter<void>()

  closeSidebar (): void {
    console.log('closeSidebar')
    this.close.emit()
  }
}
