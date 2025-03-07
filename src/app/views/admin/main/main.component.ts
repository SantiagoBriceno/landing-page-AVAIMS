import { Component, OnInit } from '@angular/core'
import { MainService } from './main.service'
import { Notice, Sponsor } from '../../../core/server/config/models/types'
import { MyCardComponent } from '../../shared/card/my-card.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MyCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public notices: Notice[] = []
  public sponsors: Sponsor[] = []
  constructor (
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
}
