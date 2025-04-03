import { Component, OnInit } from '@angular/core'
import { MainService } from './main.service'
import { Notice, Sponsor } from '../../../../types'
import { NoticeFormService } from '../notices-admin-fix/notices-admin.service'
import { CardAdminComponent } from '../components/card-admin/card-admin.component'

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    CardAdminComponent
  ]
})
export class MainComponent implements OnInit {
  public notices: Notice[] = []
  public sponsors: Sponsor[] = []
  public alertDeleteMessage: string = '¿Estás seguro de eliminar esta noticia?'
  showAlert: boolean = false
  constructor (
    private readonly noticeFormService: NoticeFormService,
    private readonly mainService: MainService
  ) {}

  ngOnInit (): void {
    this.mainService.getAllNotices().subscribe((notices) => {
      this.notices = notices.notices
    },
    (error) => {
      console.error(error)
    })
    this.mainService.getAllSponsors().subscribe((sponsors) => {
      this.sponsors = sponsors.sponsors
    },
    (error) => {
      console.error(error)
    })
  }

  onDeleteNotice (myNotice: Notice): void {
    console.log('ID de la noticia a eliminar:', myNotice._id)
    this.noticeFormService.deleteNotice(myNotice._id ?? '').subscribe({
      next: (response) => {
        console.log('Noticia eliminada:', response)
        this.notices = this.notices.filter((notice) => notice._id !== myNotice._id)
        this.showAlert = false
        // Si se borra del backend Queda borrar la imagen del frontend

        this.noticeFormService.deleteNoticeImages(myNotice.img).subscribe({
          next: (response) => {
            console.log('Imagen eliminada:', response)
          },
          error: (error) => {
            console.error('Error al eliminar la imagen:', error)
          }
        })
      },
      error: (error) => {
        console.error('Error al eliminar la noticia:', error)
      }
    })
  }
}
