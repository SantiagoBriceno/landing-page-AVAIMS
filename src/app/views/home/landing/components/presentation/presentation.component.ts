import { Component, ElementRef, ViewChild } from '@angular/core'
import { slideInLeft, slideInRight } from '../../../../shared/animations/animation'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'presentation-landing-page',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  animations: [slideInLeft, slideInRight]
})
export class PresentationComponent {
  @ViewChild('description')
    description!: ElementRef

  @ViewChild('image')
    image!: ElementRef

  @ViewChild('button')
    button!: ElementRef
}
