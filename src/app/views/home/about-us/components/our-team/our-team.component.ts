import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core'
import { SwiperContainer } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurTeamComponent {
  public members = [
    { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Presidente' },
    { ocupation: 'Arq.', name: 'Fabiola Panitz', position: 'Vicepresidente' },
    { ocupation: 'Arq.', name: 'Rafael Febres-Cordero', position: 'Tesorero' },
    { ocupation: 'Arq.', name: 'Yurima Diaz', position: 'Secretario' }

  ]

  public vocals = [
    { ocupation: 'Arq.', name: 'Marco Palladino', position: 'Vocal 1' },
    { ocupation: 'Ing.', name: 'Nelson Plasencia', position: 'Vocal 2' },
    { ocupation: 'Arq.', name: 'Alvaro Bonilla', position: 'Vocal 3' }
  ]
}
