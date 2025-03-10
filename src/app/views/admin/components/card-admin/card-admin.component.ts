import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Notice } from '../../../../../types'
import { DatePipe } from '@angular/common'
import { MyAlertComponent } from '../../../shared/my-alert/my-alert.component'

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  imports: [
    DatePipe,
    MyAlertComponent
  ],
  styleUrls: ['./card-admin.component.scss']
})
export class CardAdminComponent {
  @Input() notice: Notice = {
    id: '',
    title: '',
    description: '',
    img: '',
    date: new Date()
  }

  @Output() deleteId: EventEmitter<string> = new EventEmitter<string>()

  showAlert: boolean = false
  deleteMessageAlert: string = '¿Estás seguro de eliminar la noticia?'
  selectedId: string = ''

  handleDelete (id: string): void {
    this.showAlert = true
    this.selectedId = id
  }

  onDelete (): void {
    this.showAlert = true
    this.deleteId.emit(this.selectedId)
  }

  onConfirm (): void {
    console.log('Noticia eliminada')
    this.showAlert = false
  }

  onCancel (): void {
    console.log('No se eliminó la noticia')
    this.showAlert = false
  }
}
