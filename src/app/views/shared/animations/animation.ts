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
