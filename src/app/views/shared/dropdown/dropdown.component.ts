import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() buttonText: string = 'Menú'
  @Input() options: Array<{ label: string, link: string }> = []
  isOpen: boolean = false
  @Output() selectedOption: EventEmitter<any> = new EventEmitter()

  toggleMenu (): void {
    this.isOpen = !this.isOpen
  }

  selectOption (link: string): void {
    console.log('Navigating to', link)
    this.isOpen = false
    this.selectedOption.emit(true)
  }

  @HostListener('document:click', ['$event'])
  clickOutside (event: Event): void {
    const target = event.target as HTMLElement
    if (target.closest('.dropdown') == null) {
      this.isOpen = false
    }
  }
}
