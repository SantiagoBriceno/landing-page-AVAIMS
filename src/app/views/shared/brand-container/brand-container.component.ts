import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core'
import { Sponsor } from '../../../core/server/config/models/types'
import { fadeIn } from '../animations/animation'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-brand-container',
  standalone: true,
  imports: [],
  templateUrl: './brand-container.component.html',
  styleUrl: './brand-container.component.scss',
  animations: [fadeIn]
})
export class BrandContainerComponent implements AfterViewInit {
  @Input() brand: Sponsor = {
    description: '',
    id: 0,
    img: '',
    title: '',
    url: ''
  }

  public animationState: string = 'initial'
  @ViewChild('brandContainer') brandContainer!: ElementRef

  constructor (
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animationState = 'final'
            observer.unobserve(this.brandContainer.nativeElement)
          }
        })
      }, { threshold: 0.1 })

      observer.observe(this.brandContainer.nativeElement)
    }
  }

  onMouseEnter (): void {
    this.animationState = 'hover'
  }

  onMouseLeave (): void {
    this.animationState = 'final'
  }
}
