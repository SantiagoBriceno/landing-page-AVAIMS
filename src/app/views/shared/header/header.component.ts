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
      animate('500ms ease-in-out')
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
    { label: 'Postúlate', link: '/home/about-us/join-us' }
  ]

  constructor () {
    afterNextRender(() => {
      console.log('HeaderComponent rendered')
      console.log(this.contentRef.nativeElement.offsetWidth)
      this.isMobile = this.contentRef.nativeElement.offsetWidth < 768
    })
  }

  toggleSidebar (): void {
    console.log('toggleSidebar')
    this.isOpen = !this.isOpen
  }
}
