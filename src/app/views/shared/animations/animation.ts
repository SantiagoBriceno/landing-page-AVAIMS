import { trigger, state, style, transition, animate } from '@angular/animations'

export const fadeIn = trigger('fadeIn', [
  state('initial', style({
    opacity: 0,
    transform: 'translateY(20px)'
  })),
  state('final', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  state('hover', style({
    transform: 'scale(1.1)'
  })),
  transition('initial => final', animate(1000)),
  transition('final <=> hover', animate('200ms ease-in-out'))
])

export const slideInRight =
  trigger('slideInRight', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('800ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('800ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ])

export const slideInLeft =
  trigger('slideInLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('800ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('800ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ])
  ])
