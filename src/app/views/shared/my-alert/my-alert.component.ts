import { Component, Input, Output, EventEmitter } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-my-alert',
  templateUrl: './my-alert.component.html',
  styleUrls: ['./my-alert.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MyAlertComponent {
  @Input() message: string = ''
  @Input() show: boolean = false
  @Output() confirm = new EventEmitter<void>()
  @Output() cancel = new EventEmitter<void>()

  onConfirm (): void {
    this.confirm.emit()
    this.show = false
  }

  onCancel (): void {
    this.cancel.emit()
    this.show = false
  }
}
