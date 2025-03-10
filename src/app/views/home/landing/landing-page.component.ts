import { Component } from '@angular/core'
import { PresentationComponent } from './components/presentation/presentation.component'
import { LastNoticeComponent } from './components/last-notice/last-notice.component'
import { CarrouselComponent } from '../../shared/carrousel/carrousel.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component'
import { OurSponsorsComponent } from './components/our-sponsors/our-sponsors.component'
import { RelationsComponent } from './components/relations_prop/relations_aux.component'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    PresentationComponent,
    LastNoticeComponent,
    CarrouselComponent,
    ContactUsComponent,
    OurSponsorsComponent,
    RelationsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
