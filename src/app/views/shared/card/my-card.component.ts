import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core'
import { DatePipe, isPlatformBrowser } from '@angular/common'
import { fadeIn } from '../animations/animation'
import { NoticeFormService } from '../../admin/notices-admin-fix/notices-admin.service'
import { Notice } from '../../../../types'

@Component({
  selector: 'my-card',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss',
  animations: [fadeIn]
})
export class MyCardComponent implements AfterViewInit {
  @Input() notice: Notice = {
    title: 'Card de ejemplo - logitud del titulo',
    description: 'Un equipo de biólogos ha anunciado el descubrimiento de una nueva especie de rana en la selva amazónica. La rana, de colores brillantes y tamaño diminuto, fue encontrada durante una expedición de investigación en una zona remota de la selva.',
    img: 'images/notices/team.png',
    url: 'https://www.google.com',
    date: new Date()
  }

  @Input() selectedImage: string | ArrayBuffer | null = null
  @Input() admin: boolean = false
  @Input() id: number = 0
  public animationState: string = 'initial'
  showAlert: boolean = false
  alertMessage: string = '¿Estás seguro de eliminar esta noticia?'

  @ViewChild('newsCard') newsCard!: ElementRef

  constructor (@Inject(PLATFORM_ID) private readonly platformId: Object, private readonly noticeFormService: NoticeFormService) {}

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animationState = 'final'
            observer.unobserve(this.newsCard.nativeElement)
          }
        })
      }, { threshold: 0.1 })

      observer.observe(this.newsCard.nativeElement)
    }
  }

  onMouseEnter (): void {
    this.animationState = 'hover'
  }

  onMouseLeave (): void {
    this.animationState = 'final'
  }
}
