import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  imports: [RouterModule],
  styleUrl: './logo.component.scss'
})

export class LogoComponent {
  @Input() secondColor: boolean = false
}
