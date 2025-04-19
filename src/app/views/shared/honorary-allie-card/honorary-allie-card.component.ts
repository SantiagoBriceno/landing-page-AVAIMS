import { Component, Input } from '@angular/core'
import { HonoraryAllie } from '../../../../types'

@Component({
  selector: 'app-honorary-allie-card',
  imports: [],
  templateUrl: './honorary-allie-card.component.html',
  styleUrl: './honorary-allie-card.component.scss'
})
export class HonoraryAllieCardComponent {
  @Input() allie!: HonoraryAllie
}
