import { Component, Input } from '@angular/core'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'my-card',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})
export class MyCardComponent {
  @Input() title: string = 'Nueva Card'
  @Input() description: string = 'Descripción de la card que debe tener texto'
  @Input() img: string = ''
  @Input() created_at: Date = new Date()
}
