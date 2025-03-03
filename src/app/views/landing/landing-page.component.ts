import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { PresentationComponent } from './components/presentation/presentation.component'
import { LastNoticeComponent } from './components/last-notice/last-notice.component'
import { CarrouselComponent } from '../shared/carrousel/carrousel.component'
import { LocationComponent } from '../shared/location/location.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    PresentationComponent,
    LastNoticeComponent,
    CarrouselComponent,
    LocationComponent,
    ContactUsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
