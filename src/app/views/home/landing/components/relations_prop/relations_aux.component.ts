import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core'
import { SwiperContainer } from 'swiper/element'

interface Logo {
  title: string
  src: string
  alt: string
  url?: string
}

@Component({
  selector: 'app-relations_aux',
  templateUrl: './relations_aux.component.html',
  styleUrls: ['./relations_aux.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RelationsComponent {
  public logos: Logo[] = [
    {
      title: 'IFHE',
      src: 'images/sponsors/relations/ifhe-logo-healtcare.svg',
      alt: 'IFHE Logo',
      url: 'https://www.ifhe.info/'
    },
    {
      title: 'ADAIH',
      src: 'https://aadaih.org.ar/media/logo-AADAIH.png',
      alt: 'ADAIH Logo',
      url: 'https://aadaih.org.ar/'
    },
    {
      title: 'ABDEH',
      src: 'https://www.abdeh.org.br/template/img/logo-default-slim.png',
      alt: 'ABDEH Logo',
      url: 'https://www.abdeh.org.br/'
    },
    {
      title: 'APAIH',
      src: 'images/sponsors/relations/APAIH.png',
      alt: 'APAIH Logo',
      url: 'https://www.facebook.com/p/APAIH-Asociaci%C3%B3n-Paraguaya-de-Arquitectura-e-Ingenier%C3%ADa-Hospitalaria-100066525983678/?locale=en_GB'
    },
    {
      title: 'ACOAIH',
      src: 'https://acoaihcr.com/imagenes/logo.webp',
      alt: 'ACOAIH Logo',
      url: 'https://acoaihcr.com/'
    },
    {
      title: 'USUAIH',
      src: '',
      alt: 'USUAIH Logo'
    },
    {
      title: 'SMAESAC',
      src: 'https://www.smaesac.org/images/logo.png',
      alt: 'SMAESAC Logo',
      url: 'https://www.smaesac.org/'
    },
    {
      title: 'APAES',
      src: 'https://apaesvirtual.com/wp-content/uploads/2022/07/13686719_1046678188714576_5316920995165925944_n.png',
      alt: 'APAES Logo',
      url: 'https://www.apaesvirtual.com/es/inicio/'
    },
    {
      title: 'ACAIH',
      src: 'https://acaih.com/wp-content/uploads/2023/06/logo-500-x-500-490x490.png',
      alt: 'ACAIH Logo',
      url: 'https://acaih.com/'
    },
    {
      title: 'AARQHOS',
      src: 'https://aarqhos.cl/wp-content/uploads/2024/08/Logo-AARQHOS-v1-1536x266.png',
      alt: 'AARQHOS Logo',
      url: 'https://aarqhos.cl/'
    },
    {
      title: 'CCAIH',
      src: 'images/sponsors/relations/abaih.png',
      alt: 'CCAIH Logo'
    }
  ]

  public verticalLogos: Logo[] = [
    {
      title: 'ABDEH',
      src: 'https://www.abdeh.org.br/template/img/logo-default-slim.png',
      alt: 'ABDEH Logo',
      url: 'https://www.abdeh.org.br/'
    },
    {
      title: 'USUAIH',
      src: '',
      alt: 'USUAIH Logo'
    },
    {
      title: 'APAES',
      src: 'https://www.apaesvirtual.com/wp-content/uploads/2022/07/13686719_1046678188714576_5316920995165925944_n.png',
      alt: 'APAES Logo',
      url: 'https://www.apaesvirtual.com/es/inicio/'
    },
    {
      title: 'ACAIH',
      src: 'https://acaih.com/wp-content/uploads/2023/06/logo-500-x-500-490x490.png',
      alt: 'ACAIH Logo',
      url: 'https://acaih.com/'
    }
  ]

  public horizontalLogos: Logo[] = [
    {
      title: 'ACOAIH',
      src: 'images/sponsors/relations/acoaih.png',
      alt: 'ACOAIH Logo',
      url: 'https://acoaihcr.com/'
    },
    {
      title: 'APAIH',
      src: 'images/sponsors/relations/APAIH.png',
      alt: 'APAIH Logo',
      url: 'https://www.facebook.com/p/APAIH-Asociaci%C3%B3n-Paraguaya-de-Arquitectura-e-Ingenier%C3%ADa-Hospitalaria-100066525983678/?locale=en_GB'
    },
    {
      title: 'SMAESAC',
      src: 'https://www.smaesac.org/images/logo.png',
      alt: 'SMAESAC Logo',
      url: 'https://www.smaesac.org/'
    },
    {
      title: 'ADAIH',
      src: 'https://aadaih.org.ar/media/logo-AADAIH.png',
      alt: 'ADAIH Logo',
      url: 'https://aadaih.org.ar/'
    },
    {
      title: 'AARQHOS',
      src: 'https://aarqhos.cl/wp-content/uploads/2024/08/Logo-AARQHOS-v1-1536x266.png',
      alt: 'AARQHOS Logo',
      url: 'https://aarqhos.cl/'
    },
    {
      title: 'CCAIH',
      src: '',
      alt: 'CCAIH Logo'
    },
    {
      title: 'ABAIH',
      src: 'images/sponsors/relations/abaih.png',
      alt: 'ABAIH Logo'
    }
  ]

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>

  // swiperOptions: SwiperOptions = {
  //   modules: [],
  //   slidesPerView: 1,
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 3
  //     },
  //     1024: {
  //       slidesPerView: 5
  //     }
  //   },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false
  //   },
  //   effect: 'slide',
  //   navigation: {
  //     enabled: true
  //   },
  //   fadeEffect: {
  //     crossFade: true
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   on: {
  //     init () {
  //       // ...
  //     }
  //   }
  // }

  // constructor (@Inject(PLATFORM_ID) private readonly platformId: any) {
  // }
}
