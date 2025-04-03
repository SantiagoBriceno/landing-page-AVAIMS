import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ToastService } from '../../shared/toast/toast.service'
import { OurProfService } from '../../../core/services/our-prof.service'
import { Member } from '../../../../types'
import { ToastComponent } from '../../shared/toast/toast.component'
import { MyAlertComponent } from '../../shared/my-alert/my-alert.component'

@Component({
  selector: 'app-our-prof-admin',
  imports: [
    ReactiveFormsModule,
    ToastComponent,
    MyAlertComponent
  ],
  templateUrl: './our-prof-admin.component.html',
  styleUrl: './our-prof-admin.component.scss'
})
export class OurProfAdminComponent implements OnInit {
  profForm: FormGroup
  myMembers: Member[] = [
    {
      nro: '1',
      _id: '67cccf526b66040ac0681660',
      profession: 'Arquitecto',
      name: 'Araque Contreras',
      email: 'aldryarq@gmail.com',
      location: 'Ejido, Venezuela'
    },
    {
      nro: '2',
      _id: '67cccf526b66040ac0681669',
      profession: 'Arquitecto',
      name: 'Camposano Montes',
      email: 'camposanomania@gmail.com',
      location: 'Los Teques, Venezuela'
    },
    {
      nro: '3',
      _id: '67cccf526b66040ac068166a',
      profession: 'Ingeniero',
      name: 'Gilberto Matheus Rivas',
      email: 'gmr732@hotmail.com',
      location: 'Caracas, Venezuela'
    }
  ]

  isEdit: boolean = false
  editId: string = ''
  deleteId: string = ''
  currentPage: number = 1
  itemsPerPage: number = 10
  totalPages: number = 0
  showAlert: boolean = false

  constructor (private readonly fb: FormBuilder, private readonly toastService: ToastService, private readonly ourProfService: OurProfService) {
    this.profForm = this.fb.group({
      nro: ['', Validators.required],
      name: ['', Validators.required],
      profession: ['', Validators.required],
      email: [''],
      location: ['', Validators.required]
    })
  }

  ngOnInit (): void {
    this.loadMembers()
  }

  onSubmit (): void {
    if (!this.profForm.valid) {
      this.toastService.showToast('Por favor completa todos los campos requeridos', 'error', 3000)
      return
    }

    if (this.isEdit) {
      this.ourProfService.updateMember(this.profForm.value, this.editId).subscribe((response) => {
        console.log(response)
        if (response !== undefined && response !== null && response.modifiedCount > 0) {
          console.log('Miembro editado correctamente')
          this.toastService.showToast('Miembro editado correctamente', 'success', 3000)
          const index = this.myMembers.findIndex((m) => m._id === this.editId)
          if (index !== -1) {
            this.myMembers[index] = { ...this.profForm.value, id: this.editId }
          }
        } else {
          this.toastService.showToast('Error al editar el miembro', 'error', 3000)
        }
      })

      this.profForm.reset()
      this.profForm.markAsPristine()
      this.profForm.markAsUntouched()
      this.profForm.updateValueAndValidity()
      this.isEdit = false
      this.editId = ''
    } else {
      this.ourProfService.createMember(this.profForm.value).subscribe((response) => {
        if (response !== undefined && response !== null) {
          this.toastService.showToast('Miembro creado correctamente', 'success', 3000)
          this.myMembers.push(response.data)
        } else {
          this.toastService.showToast('Error al crear el miembro', 'error', 3000)
        }
      })
    }
    console.log(this.profForm.value)
    this.profForm.reset()
    this.profForm.markAsPristine()
    this.profForm.markAsUntouched()
    this.profForm.updateValueAndValidity()
    this.isEdit = false
    this.editId = ''
  }

  onEdit (member: Member): void {
    this.profForm.patchValue({
      nro: member.nro,
      name: member.name,
      profession: member.profession,
      email: member.email,
      location: member.location
    })
    this.isEdit = true
    console.log(member._id)
    this.editId = member._id as string
    this.profForm.markAsPristine()
    this.profForm.markAsUntouched()
    this.profForm.updateValueAndValidity()
  }

  onDelete (member: Member): void {
    this.showAlert = true
    this.deleteId = member._id as string
  }

  handleDelete (): void {
    this.ourProfService.deleteMember(this.deleteId).subscribe((response) => {
      if (response !== undefined && response !== null && response.deletedCount > 0) {
        this.toastService.showToast('Miembro eliminado correctamente', 'success', 3000)
        this.myMembers = this.myMembers.filter((member) => member._id !== this.deleteId)
      } else {
        this.toastService.showToast('Error al eliminar el miembro', 'error', 3000)
      }
    })
  }

  handleCancel (): void {
    this.showAlert = false
    this.deleteId = ''
  }

  nextPage (): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++
      this.loadMembers()
    }
  }

  prevPage (): void {
    if (this.currentPage > 1) {
      this.currentPage--
      this.loadMembers()
    }
  }

  loadMembers (): void {
    this.ourProfService.getMembersPaginated(this.currentPage, this.itemsPerPage).subscribe((response) => {
      this.myMembers = response.members
      this.totalPages = response.totalPageCount
    })
  }
}
