import { NgClass } from '@angular/common'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ToastService } from './toast.service'
import { Subscription } from 'rxjs'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-toast',
  imports: [NgClass],
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateY(-50px)'
      })),
      transition('out => in', [
        animate('0.3s ease-in-out')
      ]),
      transition('in => out', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() message: string = ''
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info'
  @Input() duration: number = 3000 // Duración en milisegundos
  show: boolean = false
  private toastSubscription: Subscription | undefined

  constructor (private readonly toastService: ToastService) {
  }

  ngOnInit (): void {
    this.toastSubscription = this.toastService.toastState.subscribe(toast => {
      console.log('Llegue hasta aqui, toast:', toast)
      this.message = toast.message
      this.type = toast.type
      this.show = true
      setTimeout(() => {
        this.show = false
      }, toast.duration ?? 3000)
    })
  }

  ngOnDestroy (): void {
    if (this.toastSubscription !== undefined) {
      this.toastSubscription.unsubscribe()
    }
  }
}
