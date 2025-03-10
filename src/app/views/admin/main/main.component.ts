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

  onDeleteNotice (id: string): void {
    this.noticeFormService.deleteNotice(id).subscribe(() => {
      this.notices = this.notices.filter((notice) => notice.id !== id)
    },
    (error: any) => {
      console.error(error)
    })
  }
}
