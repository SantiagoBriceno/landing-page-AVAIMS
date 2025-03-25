import { Component, OnInit } from '@angular/core'
import { MyCardComponent } from '../../../../shared/card/my-card.component'
import { LastNoticeService } from './last-notice.service'
import { Notice } from '../../../../../../types'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-last-notice',
  templateUrl: './last-notice.component.html',
  styleUrls: ['./last-notice.component.scss'],
  standalone: true,
  imports: [MyCardComponent, RouterModule]
})
export class LastNoticeComponent implements OnInit {
  public notices: Notice[] = []
  constructor (private readonly LastNoticeService: LastNoticeService) {}

  ngOnInit (): void {
    this.LastNoticeService.getNotices().subscribe((data) => {
      this.notices = data.notices
    },
    (error) => {
      console.error(error)
    })
  }
}
