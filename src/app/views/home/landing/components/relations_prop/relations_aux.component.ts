import { Component, OnInit } from '@angular/core'

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
  standalone: true
})
export class RelationsComponent implements OnInit {
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
      src: 'https://www.abdeh.org.br/public/template/img/logo-default-slim.png',
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
      src: 'https://www.apaesvirtual.com/wp-content/uploads/2022/07/13686719_1046678188714576_5316920995165925944_n.png',
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
      title: 'CCCG',
      src: 'https://www.cirag.cu/wp-content/uploads/2018/04/Identificador-CCCG-blaco.png',
      alt: 'CCCG Logo'
    },
    {
      title: 'CCAIH',
      src: 'images/sponsors/relations/abaih.png',
      alt: 'CCAIH Logo'
    }
  ]

  visibleLogos: Logo[] = []
  currentIndex = 0
  startIndex = 0
  visibleCount = 5

  ngOnInit (): void {
    this.updateVisibleLogos()
  }

  prev (): void {
    this.startIndex = (this.startIndex - 1 + this.logos.length) % this.logos.length
    this.updateVisibleLogos()
  }

  next (): void {
    this.startIndex = (this.startIndex + 1) % this.logos.length
    this.updateVisibleLogos()
  }

  updateVisibleLogos (): void {
    this.visibleLogos = []
    for (let i = 0; i < this.visibleCount; i++) {
      const index = (this.startIndex + i) % this.logos.length
      this.visibleLogos.push(this.logos[index])
    }
  }
}
