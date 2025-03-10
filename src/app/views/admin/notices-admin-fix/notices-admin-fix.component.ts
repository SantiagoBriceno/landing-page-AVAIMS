import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NoticeFormService } from './notices-admin.service'
import { ToastService } from '../../shared/toast/toast.service'
import { Router } from '@angular/router'
import { MyCardComponent } from '../../shared/card/my-card.component'
import { Notice } from '../../../../types'
import { ToastComponent } from '../../shared/toast/toast.component'

@Component({
  selector: 'app-notices-admin-fix',
  imports: [ReactiveFormsModule, MyCardComponent, ToastComponent],
  templateUrl: './notices-admin-fix.component.html',
  styleUrl: './notices-admin-fix.component.scss'
})
export class NoticesAdminFixComponent implements OnInit {
  noticeForm: FormGroup
  selectedImage: string | ArrayBuffer | null = null
  noticePreview: Notice = {
    title: '',
    description: '',
    date: new Date(),
    url: '',
    img: ''
  }

  constructor (private readonly fb: FormBuilder, private readonly noticeFormService: NoticeFormService, private readonly router: Router, private readonly toastService: ToastService) {
    this.noticeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      url: [''],
      img: ['', Validators.required]
    })
  }

  ngOnInit (): void {
    this.noticeForm.valueChanges.subscribe((value) => {
      this.noticePreview = value
    })
  }

  onFileChange (event: any): void {
    const file = event.target.files[0] as File
    if (file !== undefined || file !== null) {
      this.noticeForm.patchValue({
        ...this.noticeForm.value,
        img: file
      })
      this.noticeForm.get('img')?.updateValueAndValidity()
      const reader = new FileReader()
      reader.onload = () => {
        this.selectedImage = reader.result
      }
      reader.readAsDataURL(file)
    }
  }

  onSubmit (): void {
    if (!this.noticeForm.valid) {
      return
    }

    const newNotice: Notice = {
      title: this.noticeForm.value.title,
      description: this.noticeForm.value.description,
      date: this.noticeForm.value.date,
      url: this.noticeForm.value.url,
      img: this.noticeForm.value.img
    }

    this.noticeFormService.saveNoticeImages(this.noticeForm.value.img).subscribe((response) => {
      const { image } = response
      console.log('Imagen subida correctamente')
      newNotice.img = image
      this.noticeFormService.createNotice(newNotice).subscribe((response) => {
        console.log(response)
        this.toastService.showToast('Noticia creada correctamente', 'success', 3000)
        void this.router.navigate(['/admin'])
      })
    })

    console.log(newNotice)
  }
}
