import { Component, OnInit } from '@angular/core'
import { ContributingAlliesService } from './contributing-allies.service'
import { Sponsor } from '../../../../types'

@Component({
  selector: 'app-contributing-allies',
  templateUrl: './contributing-allies.component.html',
  styleUrl: './contributing-allies.component.scss'
})
export class ContributingAlliesComponent implements OnInit {
  public ourAllies: Sponsor[] = []

  constructor (private readonly myService: ContributingAlliesService) {}
  ngOnInit (): void {
    this.myService.getAllInstitutionalAllies().subscribe((data) => {
      this.ourAllies = data.sponsors
    },
    (error) => {
      console.error(error)
    })
  }
}
