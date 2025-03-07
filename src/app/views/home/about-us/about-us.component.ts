import { Component } from '@angular/core'
import { slideInLeft, slideInRight } from '../../shared/animations/animation'
@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  animations: [slideInLeft, slideInRight]
})
export class AboutUsComponent {

}
