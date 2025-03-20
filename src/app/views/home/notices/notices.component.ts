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
  noticesCategories: string[] = []
  searchTerm: string = ''
  searchYear: string = '1999'
  searchCategory: string = 'Todas'

  constructor (private readonly noticesService: NoticesService) {}

  ngOnInit (): void {
    this.noticesService.getNotices().subscribe(noticesResponse => {
      this.notices = noticesResponse.notices
      this.filteredNotices = [...this.notices] // Ahora se ejecuta después de obtener los datos
      const { categories, years } = this.noticesService.getNoticesYearsAndCategories(this.notices)
      this.noticesYears = years
      this.noticesCategories = categories
    })
  }

  onSearchTermChange (): void {
    this.filterNotices()
  }

  onYearChange (): void {
    this.filterNotices()
  }

  onCategoryChange (): void {
    this.filterNotices()
  }

  filterNotices (): void {
    let filtered = [...this.notices]

    // Filtro por término de búsqueda
    if (this.searchTerm !== '') { // Corrección aquí
      const searchTermLower = this.searchTerm.toLowerCase()
      filtered = filtered.filter(notice =>
        notice.title.toLowerCase().includes(searchTermLower) ||
        notice.description.toLowerCase().includes(searchTermLower)
      )
    }

    // Filtro por año
    if (this.searchYear !== '1999') { // Corrección aquí
      const year = parseInt(this.searchYear)
      filtered = filtered.filter(notice => new Date(notice.date).getFullYear() === year)
    }

    // Filtro por categoría
    if (this.searchCategory !== 'Todas') { // Corrección aquí
      filtered = filtered.filter(notice => notice.category === this.searchCategory)
    }

    this.filteredNotices = filtered
  }

  clearFilters (): void {
    this.searchTerm = ''
    this.searchYear = '1999'
    this.searchCategory = 'Todas'
    this.filterNotices()
  }
}
