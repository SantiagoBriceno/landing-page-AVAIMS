import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core'
import { slideInLeftDelay, slideInRightDelay } from '../../../../shared/animations/animation'
import { isPlatformBrowser } from '@angular/common'
import { OurTeamComponent } from '../our-team/our-team.component'

@Component({
  selector: 'app-our-history',
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.scss'],
  animations: [slideInLeftDelay, slideInRightDelay],
  imports: [OurTeamComponent]
})
export class OurHistoryComponent implements AfterViewInit {
  animationState: string = 'initial'
  @ViewChild('slideRight') slideRight!: ElementRef
  @ViewChild('slideLeft') slideLeft!: ElementRef
  isMobile: boolean = false

  constructor (@Inject(PLATFORM_ID) private readonly platformId: Object) {
  }

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animationState = 'final'
            observer.unobserve(this.slideRight.nativeElement)
          }
        })
      }, { threshold: 0.1 })
      observer.observe(this.slideRight.nativeElement)
    }
  }
}
