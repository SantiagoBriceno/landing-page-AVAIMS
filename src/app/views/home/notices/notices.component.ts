import { Component, OnInit } from '@angular/core'
import { Notice } from '../../../../types'
import { MyCardComponent } from '../../shared/card/my-card.component'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NoticesService } from './notices.service'

@Component({
  selector: 'app-notices',
  imports: [MyCardComponent, FormsModule, RouterModule],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent implements OnInit {
  // public notices: Notice[] = [
  //   {

  //     title: 'Avance Tecnológico Sorprendente',
  //     description: 'Un nuevo descubrimiento revoluciona la industria tecnológica. Los detalles se revelarán pronto.',
  //     date: new Date(2024, 5, 15), // 15 de junio de 2024
  //     img: 'images/team.jpg',
  //     url: 'https://ejemplo.com/noticia1'
  //   },
  //   {
  //     title: 'Impactante Evento Climático',
  //     description: 'Un fenómeno meteorológico sin precedentes azota la región. Se recomienda tomar precauciones.',
  //     date: new Date(2024, 6, 2), // 2 de julio de 2024
  //     img: 'images/team.jpg',
  //     url: 'https://ejemplo.com/noticia2'
  //   },
  //   {
  //     title: 'Descubrimiento Científico Inesperado',
  //     description: 'Un equipo de investigadores realiza un hallazgo que podría cambiar nuestra comprensión del universo.',
  //     date: new Date(2024, 7, 20), // 20 de agosto de 2024
  //     img: 'images/team.jpg',
  //     url: 'https://ejemplo.com/noticia3'
  //   },
  //   {
  //     title: 'Nuevo Programa Educativo Lanzado',
  //     description: 'Una innovadora iniciativa educativa busca transformar la forma en que aprendemos.',
  //     date: new Date(2024, 8, 10), // 10 de septiembre de 2024
  //     img: 'images/team.jpg',
  //     url: 'https://ejemplo.com/noticia4'
  //   },
  //   {
  //     title: 'Éxito en la Exploración Espacial',
  //     description: 'Una misión espacial logra un hito importante en la exploración de nuevos mundos.',
  //     date: new Date(2024, 9, 5), // 5 de octubre de 2024
  //     img: 'images/team.jpg',
  //     url: 'https://ejemplo.com/noticia5'
  //   }
  // ]
  public notices: Notice[] = []

  showFloatingButton = false

  filteredNotices: Notice[] = []
  noticesYears: number[] = []
  searchTerm: string = ''
  searchYear: string = '1999'

  constructor (private readonly noticesService: NoticesService) {}

  ngOnInit (): void {
    this.noticesService.getNotices().subscribe(notices => {
      this.notices = notices.notices
    })
    this.filteredNotices = [...this.notices]
    this.noticesYears = this.noticesService.getNoticesYears(this.notices)
  }

  filterBySearchTerm (): void {
    this.filteredNotices = this.notices.filter(notice =>
      notice.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  filterByYear (): void {
    console.log(this.searchYear)
    if (this.searchYear === '1999') {
      this.filteredNotices = [...this.notices]
      return
    }
    this.filteredNotices = this.notices.filter(notice => {
      return new Date(notice.date).getFullYear() === parseInt(this.searchYear)
    })
  }
}
