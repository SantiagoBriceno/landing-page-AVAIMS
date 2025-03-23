import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core'
import { LogoComponent } from '../logo/logo.component'
import { RouterModule } from '@angular/router'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component'
import { DropdownComponent } from '../dropdown/dropdown.component'

@Component({
  selector: 'header-landing-page',
  standalone: true,
  imports: [
    LogoComponent,
    RouterModule,
    SidebarMobileComponent,
    DropdownComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [trigger('slideDown', [
    state('void', style({
      height: '0',
      opacity: 0
    })),
    state('*', style({
      height: '*',
      opacity: 1
    })),
    transition('void <=> *', [
      animate('1000ms ease-in-out')
    ])
  ])]
})
export class HeaderComponent {
  @ViewChild('content') contentRef!: ElementRef
  isMobile: boolean = false
  isOpen: boolean = false
  public animationState: string = 'initial'
  public dropDownLink: Array<{ label: string, link: string }> = [
    { label: 'Quiénes somos', link: '/home/about-us/our-history' },
    { label: 'Membresía', link: '/home/about-us/join-us' }
  ]

  public dropDownLinkAllies: Array<{ label: string, link: string }> = [
    { label: 'Activos', link: 'our-allies/professional' },
    { label: 'Contribuyentes', link: 'our-allies/contributing-allies' },
    { label: 'Institucionales', link: 'our-allies/institutional-allies' }
  ]

  public longNameText: string = 'Asociación Venezolana de Arquitectura e Ingeniería Médico Sanitaria (AVAIMS)'
  public letters: string[] = []

  constructor () {
    this.letters = this.longNameText.split('')
    afterNextRender(() => {
      console.log('HeaderComponent rendered')
      console.log(this.contentRef.nativeElement.offsetWidth)
      this.isMobile = this.contentRef.nativeElement.offsetWidth < 768
    })
  }

  getClassLetter (index: number): string {
    return `fade-in delay-${index}`
  }

  toggleSidebar (): void {
    console.log('toggleSidebar')
    this.isOpen = !this.isOpen
  }
}
