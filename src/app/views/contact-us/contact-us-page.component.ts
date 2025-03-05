import { Component } from '@angular/core'
import { ContactUsComponent } from '../landing/components/contact-us/contact-us.component'

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss'],
  imports: [ContactUsComponent]
})
export class ContactUsPageComponent {}
