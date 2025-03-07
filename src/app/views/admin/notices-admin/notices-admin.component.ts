import { Component } from '@angular/core'
import { NoticeFormComponent } from './components/notice-form/notice-form.component'
import { Notice } from '../../../core/server/config/models/types'
import { MyCardComponent } from '../../shared/card/my-card.component'

@Component({
  selector: 'app-notices-admin',
  imports: [NoticeFormComponent, MyCardComponent],
  templateUrl: './notices-admin.component.html',
  styleUrl: './notices-admin.component.scss'
})
export class NoticesAdminComponent {
  public newNotice: Notice | null = null
  public selectedImage: string | ArrayBuffer | null = null

  onNewNotice (event: Notice): void {
    console.log(event)
    this.newNotice = event
  }

  onSelectedImage (image: string | ArrayBuffer | null): void {
    this.selectedImage = image
  }
}
