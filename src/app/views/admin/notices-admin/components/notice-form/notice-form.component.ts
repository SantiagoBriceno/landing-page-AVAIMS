import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NoticeFormService } from './notice-form.service'
import { Notice } from '../../../../../core/server/config/models/types'

@Component({
  selector: 'app-notice-form',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './notice-form.component.html',
  styleUrl: './notice-form.component.scss'
})
export class NoticeFormComponent implements OnInit {
  @Output() newNotice: EventEmitter<Notice> = new EventEmitter<Notice>()
  @Output() selectedImageOutput: EventEmitter<ArrayBuffer | string | null> = new EventEmitter<ArrayBuffer | string | null>()
  noticeForm: FormGroup
  selectedImage: string | ArrayBuffer | null = null

  constructor (private readonly fb: FormBuilder, private readonly noticeFormService: NoticeFormService) {
    this.noticeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      img: ['', Validators.required]
    })
  }

  ngOnInit (): void {
    this.noticeForm.valueChanges.subscribe(() => {
      this.emitNewNotice()
    })
  }

  emitNewNotice (): void {
    this.newNotice.emit(this.noticeForm.value)
  }

  emitSelectedImage (): void {
    this.selectedImageOutput.emit(this.selectedImage)
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
        this.emitSelectedImage()
      }
      reader.readAsDataURL(file)
    }
  }

  clearImage (): void {
    this.noticeForm.get('img')?.setValue('')
    this.noticeForm.get('img')?.updateValueAndValidity()
    this.selectedImage = null
  }

  onSubmit (): void {
    if (!this.noticeForm.valid) {
      return
    }
    const formData = new FormData()
    formData.append('title', this.noticeForm.value.title)
    formData.append('description', this.noticeForm.value.description)
    formData.append('date', this.noticeForm.value.date)
    formData.append('img', this.noticeForm.value.img, this.noticeForm.value.img.name)

    this.noticeFormService.createNotice(formData).subscribe((response) => {
      console.log(response)
    },
    (error) => {
      console.log(error)
    })
  }
}
