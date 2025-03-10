import { Component, HostListener } from '@angular/core'
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
  isOpen: boolean = false
  toggleSidebar (): void {
    console.log('Toggling sidebar')
    this.isOpen = !this.isOpen
  }

  @HostListener('document:click', ['$event'])
  clickOutside (event: Event): void {
    const target = event.target as HTMLElement
    if (target.closest('.mobile-sidebar') == null) {
      this.isOpen = false
    }
  }
}
