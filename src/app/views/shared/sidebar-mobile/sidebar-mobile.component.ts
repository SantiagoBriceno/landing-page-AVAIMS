import { Component, HostListener } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DropdownComponent } from '../dropdown/dropdown.component'

@Component({
  selector: 'app-sidebar-mobile',
  imports: [
    RouterModule,
    DropdownComponent
  ],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss'
})
export class SidebarMobileComponent {
  isOpen: boolean = false

  aboutUsOptions: Array<{ label: string, link: string }> = [
    { label: 'Nuestra Historia', link: '/home/about-us/our-history' },
    { label: 'Únete a nosotros', link: '/home/about-us/join-us' }
  ]

  ourAlliesOptions: Array<{ label: string, link: string }> = [
    { label: 'Profesionales', link: '/home/our-allies/professional' },
    { label: 'Miembros Contribuyentes', link: '/home/our-allies/contributing-allies' },
    { label: 'Miembros Institucionales', link: '/home/our-allies/institutional-allies' },
    { label: 'Miembros Honorarios', link: '/home/our-allies/honorary-allies' }
  ]

  isOpenSubmenuAboutUs: boolean = false
  isOpenSubmenuOurAllies: boolean = false

  toggleSidebar (): void {
    console.log('Toggling sidebar')
    this.isOpen = !this.isOpen
  }

  toggleSubmenuAboutUs (): void {
    this.isOpenSubmenuAboutUs = !this.isOpenSubmenuAboutUs
  }

  toggleSubmenuOurAllies (): void {
    this.isOpenSubmenuOurAllies = !this.isOpenSubmenuOurAllies
  }

  @HostListener('document:click', ['$event'])
  clickOutside (event: Event): void {
    const target = event.target as HTMLElement
    if (target.closest('.mobile-sidebar') == null) {
      this.isOpen = false
    }
  }
}
