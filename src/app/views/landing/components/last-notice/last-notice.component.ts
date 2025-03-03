import { Component } from '@angular/core'
import { MyCardComponent } from '../../../shared/card/my-card.component'
import { MatButtonModule } from '@angular/material/button'

interface Notice {
  title: string
  description: string
  img: string
}

@Component({
  selector: 'app-last-notice',
  templateUrl: './last-notice.component.html',
  styleUrls: ['./last-notice.component.scss'],
  standalone: true,
  imports: [MyCardComponent, MatButtonModule]
})
export class LastNoticeComponent {
  public notices: Notice[] = [
    {
      title: 'Notice 1',
      description: 'Description 1',
      img: 'https://via.placeholder.com/150'
    },
    {
      title: 'Notice 2',
      description: 'Description 2',
      img: 'https://via.placeholder.com/150'
    },
    {
      title: 'Notice 3',
      description: 'Description 3',
      img: 'https://via.placeholder.com/150'
    }
  ]
}
