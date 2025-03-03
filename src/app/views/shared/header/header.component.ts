import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { LogoComponent } from '../logo/logo.component'

@Component({
  selector: 'header-landing-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    LogoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('content') contentRef?: ElementRef
  isMobile: boolean = false

  constructor () {
    afterNextRender(() => {
      console.log(this.contentRef?.nativeElement.scrollHeight)
      this.isMobile = this.contentRef?.nativeElement.offsetWidth <= 768
    })
  }
}
