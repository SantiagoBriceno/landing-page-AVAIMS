import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-carrousel',
  standalone: true,
  templateUrl: './carrousel.component.html',
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  currentIndex: number = 0
  items: string[] = [
    'images/carrousel/carrousel1.png',
    'images/carrousel/carrousel2.jpg',
    'images/carrousel/carrousel1.png',
    'images/carrousel/carrousel2.jpg'
  ]

  next (): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length
  }

  prev (): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
  }
}
