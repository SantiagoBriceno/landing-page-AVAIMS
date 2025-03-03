import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { LogoComponent } from '../logo/logo.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    LogoComponent
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
}
