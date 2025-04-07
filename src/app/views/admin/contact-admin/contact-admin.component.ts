import { Component } from '@angular/core'
import { Contact } from '../../../../types'
import { DatePipe } from '@angular/common'
import { ContactAdminService } from './contact-admin.service'

@Component({
  selector: 'app-contact-admin',
  imports: [DatePipe],
  templateUrl: './contact-admin.component.html',
  styleUrl: './contact-admin.component.scss'
})
export class ContactAdminComponent {
  public messages: Contact[] = []
  public selectedMessage: Contact | null = null

  constructor (private readonly contactAdminService: ContactAdminService) {

  }

  ngOnInit (): void {
    this.contactAdminService.getAllContacts().subscribe((response) => {
      this.messages = response.contacts
    })
  }

  showMessageDetails (message: Contact): void {
    this.selectedMessage = message
    console.log('Mensaje seleccionado:', message)
    if (message.status === 0) {
      this.contactAdminService.updateContactStatus(message._id).subscribe(() => {
        console.log('Estado actualizado')
        message.status = 1
      })
    }
  }
}
