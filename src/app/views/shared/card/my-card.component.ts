import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core'
import { DatePipe, isPlatformBrowser } from '@angular/common'
import { fadeIn } from '../animations/animation'

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
  @Input() title: string | undefined = 'Nueva Card'
  @Input() description: string | undefined = 'Descripción de la card que debe tener texto'
  @Input() img: string | ArrayBuffer | null = 'images/notices/1741302272109fondodefault.jpeg'
  @Input() created_at: Date | undefined = new Date()
  @Input() admin: boolean = false
  public animationState: string = 'initial'

  @ViewChild('newsCard') newsCard!: ElementRef

  constructor (@Inject(PLATFORM_ID) private readonly platformId: Object) {}

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
    console.log(this.created_at)
  }

  onMouseEnter (): void {
    this.animationState = 'hover'
  }

  onMouseLeave (): void {
    this.animationState = 'final'
  }
}
