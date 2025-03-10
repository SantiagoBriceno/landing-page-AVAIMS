/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { isPlatformBrowser } from '@angular/common'
import { Directive, ElementRef, HostBinding, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core'

@Directive({
  selector: '[appViewportAnimation]',
  standalone: true
})
export class ViewportAnimationDirective implements OnInit, OnDestroy {
  @HostBinding('@slideInLeft') slideInLeft: boolean = false
  @HostBinding('@slideInRight') slideInRight: boolean = false

  private observer!: IntersectionObserver
  private readonly isBrowser: boolean

  constructor (private readonly el: ElementRef, @Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  ngOnInit (): void {
    if (this.isBrowser) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (this.el.nativeElement.classList.contains('slide-left')) {
              this.slideInLeft = true
            } else if (this.el.nativeElement.classList.contains('slide-right')) {
              this.slideInRight = true
            }
            if (this.observer) {
              this.observer.disconnect()
            }
          }
        })
      }, {
        threshold: 0.1
      })

      this.observer.observe(this.el.nativeElement)
    }
  }

  ngOnDestroy (): void {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
