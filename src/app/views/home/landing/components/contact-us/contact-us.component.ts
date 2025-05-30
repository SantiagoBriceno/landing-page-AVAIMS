import { Component } from '@angular/core'
import { LogoComponent } from '../../../../shared/logo/logo.component'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Contact } from '../../../../../../types'
import { ContactUsService } from './contact-us.service'
import { MAIL, TLF } from '../../../../../core/constant/contant'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  imports: [
    ReactiveFormsModule,
    LogoComponent
  ],
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  myFormContact: FormGroup
  public contact = {
    mail: MAIL,
    tlf: TLF
  }

  constructor (
    private readonly fb: FormBuilder,
    private readonly contactUsService: ContactUsService
  ) {
    this.myFormContact = this.fb.group({
      affair: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit (): void {
    if (!this.myFormContact.valid) {
      console.log('Formulario inválido')
      return
    }
    const newContactData: Contact = {
      affair: this.myFormContact.value.affair,
      name: this.myFormContact.value.name,
      last_name: this.myFormContact.value.lastName,
      email: this.myFormContact.value.email,
      phone: this.myFormContact.value.phone,
      message: this.myFormContact.value.message,
      created_at: new Date(),
      status: 0
    }
    this.contactUsService.sendContactUsMessage(newContactData).subscribe(
      (response) => {
        console.log('Mensaje enviado correctamente:', response)
        this.myFormContact.reset()
        alert('Mensaje enviado correctamente')
      },
      (error) => {
        console.error(error)
        alert('Error al enviar el mensaje')
      })
  }
}
