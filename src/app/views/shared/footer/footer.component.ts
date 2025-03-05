import { Component } from '@angular/core'
import { LogoComponent } from '../logo/logo.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
    LogoComponent
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
}
