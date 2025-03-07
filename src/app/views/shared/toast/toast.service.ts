import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly toastSubject = new Subject<{ message: string, type: 'success' | 'error' | 'warning' | 'info', duration?: number }>()

  toastState = this.toastSubject.asObservable()

  showToast (message: string, type: 'success' | 'error' | 'warning' | 'info', duration?: number): void {
    this.toastSubject.next({ message, type, duration })
  }
}
