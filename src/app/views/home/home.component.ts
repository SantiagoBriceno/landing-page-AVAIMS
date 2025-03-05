import { Component } from '@angular/core'
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
}
