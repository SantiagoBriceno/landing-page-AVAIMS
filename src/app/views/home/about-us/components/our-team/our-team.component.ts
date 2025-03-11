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
export class OurTeamComponent implements AfterViewInit {
  public juntas = [
    {
      years: '2022',
      members: [
        { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Presidente' },
        { ocupation: 'Arq.', name: 'Fabiola Panitz', position: 'Vicepresidente' },
        { ocupation: 'Arq.', name: 'Rafael Febres-Cordero', position: 'Tesorero' },
        { ocupation: 'Arq.', name: 'Yurima Diaz', position: 'Secretario' },
        { ocupation: 'Arq.', name: 'Marco Palladino', position: 'Vocal 1' },
        { ocupation: 'Ing.', name: 'Nelson Plasencia', position: 'Vocal 2' },
        { ocupation: 'Arq.', name: 'Alvaro Bonilla', position: 'Vocal 3' }
      ]
    },
    {
      years: '2017',
      members: [
        { ocupation: 'Ing.', name: 'Lisbeth Hernenadez', position: 'Presidente' },
        { ocupation: 'Arq.', name: 'Rolando Frezza', position: 'Vicepresidente' },
        { ocupation: 'Ing.', name: 'Rodrigo Mijares', position: 'Tesorero' },
        { ocupation: 'Arq.', name: 'Bertha Jones Parra', position: 'Secretario' },
        { ocupation: 'Ing.', name: 'José Duque', position: 'Vocal 1' },
        { ocupation: null, name: null, position: 'Vocal 2' },
        { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Vocal 3' }
      ]
    },
    {
      years: '2015',
      members: [
        { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Presidente' },
        { ocupation: 'Arq.', name: 'Elisa Badel', position: 'Vicepresidente' },
        { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Tesorero' },
        { ocupation: null, name: null, position: 'Secretario' },
        { ocupation: 'Arq.', name: 'Katiuska Caicedo', position: 'Vocal 1' },
        { ocupation: 'Arq.', name: 'Marco Palladino', position: 'Vocal 2' },
        { ocupation: 'Ing.', name: 'Lisbeth Hernandez', position: 'Vocal 3' }
      ]
    },
    {
      years: '2013',
      members: [
        { ocupation: 'Ing.', name: 'Jose Duque', position: 'Presidente' },
        { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Vicepresidente' },
        { ocupation: 'Ing.', name: 'Rodrigo Mijares', position: 'Tesorero' },
        { ocupation: 'Arq.', name: 'Bertha Jones Parra', position: 'Secretario' },
        { ocupation: 'Ing.', name: 'Jose Duque', position: 'Vocal 1' },
        { ocupation: 'Arq.', name: 'Marco Palladino', position: 'Vocal 2' },
        { ocupation: 'Ing.', name: 'Lisbeth Hernandez', position: 'Vocal 3' }
      ]
    },
    {
      years: '2011',
      members: [
        { ocupation: 'Arq.', name: 'Jorge Garrido', position: 'Presidente' },
        { ocupation: 'Arq.', name: 'Elisa Badel', position: 'Vicepresidente' },
        { ocupation: 'Ing.', name: 'Rodrigo Mijares', position: 'Tesorero' },
        { ocupation: 'Arq.', name: 'Bertha Jones Parra', position: 'Secretario' },
        { ocupation: 'Ing.', name: 'Jose Duque', position: 'Vocal 1' },
        { ocupation: 'Arq.', name: 'Marco Palladino', position: 'Vocal 2' },
        { ocupation: 'Ing.', name: 'Lisbeth Hernandez', position: 'Vocal 3' }
      ]
    }
  ]

  @ViewChild('cardSwiper') cardSwiper!: ElementRef<SwiperContainer>

  swiperOptions: SwiperOptions = {
    modules: [],
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    effect: 'slide',
    navigation: {
      enabled: true
    },
    spaceBetween: 20,
    speed: 1500,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init () {
        // ...
      }
    }
  }

  constructor (@Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.cardSwiper.nativeElement, this.swiperOptions)
      this.cardSwiper.nativeElement.initialize()
    }
  }
}
