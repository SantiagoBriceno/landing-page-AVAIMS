import { Component } from '@angular/core'
import { slideInLeft, slideInRight } from '../../shared/animations/animation'
import { OurMisionComponent } from './components/our-mision/our-mision.component'
import { OurHistoryComponent } from './components/our-history/our-history.component'
import { OurServicesComponent } from './components/our-services/our-services.component'
@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  animations: [slideInLeft, slideInRight],
  imports: [OurMisionComponent, OurHistoryComponent, OurServicesComponent]
})
export class AboutUsComponent {

}
