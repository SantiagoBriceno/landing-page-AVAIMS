import { Component } from '@angular/core'
import { LogoComponent } from '../logo/logo.component'
import { ADDRESS, MAIL, TLF } from '../../../core/constant/contant'

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
  public contact = {
    mail: MAIL,
    tlf: TLF,
    address: ADDRESS
  }
}
