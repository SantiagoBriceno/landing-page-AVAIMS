
import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core'
import { SwiperContainer } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
@Component({
  selector: 'app-background-swiper',
  standalone: true,
  templateUrl: './background-swiper.component.html',
  imports: [
  ],
  styleUrls: ['./background-swiper.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BackgroundSwiperComponent implements AfterViewInit {
  @Input() items: string[] = [
    'images/assets/fondo1.jpg',
    'images/assets/fondo2.jpg',
    'images/assets/fondo3.jpg'
  ]

  swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3500,
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

  @ViewChild('bgSwiper') swiper!: ElementRef<SwiperContainer>

  constructor (@Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.swiper.nativeElement, this.swiperOptions)
      this.swiper.nativeElement.initialize()
    }
  }
}
