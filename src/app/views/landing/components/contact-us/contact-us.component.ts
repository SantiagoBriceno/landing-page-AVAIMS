import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { LogoComponent } from '../../../shared/logo/logo.component'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  imports: [
    MatInputModule,
    MatButtonModule,
    LogoComponent,
    MatIconModule
  ],
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {}
