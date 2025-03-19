import { Component, HostListener } from '@angular/core'
import { HeaderComponent } from '../shared/header/header.component'
import { FooterComponent } from '../shared/footer/footer.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showFloatingButton = false
  @HostListener('window:scroll', ['$event'])
  onWindowScroll (): void {
    this.showFloatingButton = window.scrollY > 300 // Ajusta el valor según necesites
  }

  scrollToTop (): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
