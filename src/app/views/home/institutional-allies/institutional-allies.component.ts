import { Component, OnInit } from '@angular/core'
import { Sponsor } from '../../../../types'
import { InstitutionalAlliesService } from './institutional-allies.service'
import { BrandContainerComponent } from '../../shared/brand-container/brand-container.component'

@Component({
  selector: 'app-institutional-allies',
  imports: [BrandContainerComponent],
  templateUrl: './institutional-allies.component.html',
  styleUrl: './institutional-allies.component.scss'
})
export class InstitutionalAlliesComponent implements OnInit {
  public ourAllies: Sponsor[] = []

  constructor (private readonly myService: InstitutionalAlliesService) {}
  ngOnInit (): void {
    this.myService.getAllInstitutionalAllies().subscribe((data) => {
      this.ourAllies = data.sponsors
    },
    (error) => {
      console.error(error)
    })
  }
}
