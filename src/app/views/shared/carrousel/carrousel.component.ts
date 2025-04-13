
import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core'
import { SwiperContainer } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
@Component({
  selector: 'app-carrousel',
  standalone: true,
  templateUrl: './carrousel.component.html',
  imports: [
  ],
  styleUrls: ['./carrousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselComponent implements AfterViewInit {
  items: string[] = [
    'images/carrousel/fondo1.jpg',
    'images/carrousel/fondo2.webp',
    'images/carrousel/fondo3.webp'
  ]

  swiperOptions: SwiperOptions = {
    modules: [],
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      init () {
        // ...
      }
    }
  }

  @ViewChild('bigSwiper') swiper!: ElementRef<SwiperContainer>

  constructor (@Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.swiper.nativeElement, this.swiperOptions)
      this.swiper.nativeElement.initialize()
    }
  }
}
