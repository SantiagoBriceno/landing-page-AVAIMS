import { Component, OnInit } from '@angular/core'
import { Sponsor } from '../../../../../../types'
import { OurSponsorsService } from './our-sponsors.service'
import { fadeIn } from '../../../../shared/animations/animation'
import { BrandContainerComponent } from '../../../../shared/brand-container/brand-container.component'

@Component({
  selector: 'app-our-sponsors',
  standalone: true,
  imports: [
    BrandContainerComponent
  ],
  templateUrl: './our-sponsors.component.html',
  styleUrl: './our-sponsors.component.scss',
  animations: [fadeIn]
})
export class OurSponsorsComponent implements OnInit {
  public sponsors: Sponsor[] = []
  constructor (
    private readonly OurSponsorsService: OurSponsorsService
  ) {}

  ngOnInit (): void {
    this.OurSponsorsService.getSponsors().subscribe((data) => {
      this.sponsors = data.sponsors
    },
    (error: any) => {
      console.error(error)
    })
  }
}
