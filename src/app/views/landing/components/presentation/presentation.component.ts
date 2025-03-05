import { animate, style, transition, trigger } from '@angular/animations'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'presentation-landing-page',
  standalone: true,
  imports: [
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('800ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('800ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class PresentationComponent {
  @ViewChild('description')
    description!: ElementRef

  @ViewChild('image')
    image!: ElementRef

  @ViewChild('button')
    button!: ElementRef
}
