import { Component, OnInit } from '@angular/core'
import { Member } from '../../../../types'
import { OurProfService } from './our-prof.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-our-prof',
  imports: [FormsModule],
  templateUrl: './our-prof.component.html',
  styleUrl: './our-prof.component.scss'
})
export class OurProfComponent implements OnInit {
  public membersExample: Member[] = [
    {
      id: '67cccf526b66040ac0681660',
      profession: 'Arquitecto',
      name: 'Araque Contreras',
      email: 'aldryarq@gmail.com',
      location: 'Ejido, Venezuela'
    },
    {
      id: '67cccf526b66040ac0681669',
      profession: 'Arquitecto',
      name: 'Camposano Montes',
      email: 'camposanomania@gmail.com',
      location: 'Los Teques, Venezuela'
    },
    {
      id: '67cccf526b66040ac068166a',
      profession: 'Ingeniero',
      name: 'Gilberto Matheus Rivas',
      email: 'gmr732@hotmail.com',
      location: 'Caracas, Venezuela'
    }
  ]

  icons = [
    'fa-solid fa-sort',
    'fa-solid fa-sort-up',
    'fa-solid fa-sort-down'
  ]

  filterText: string = ''

  sortColumn: string | null = null
  sortDirection: 'asc' | 'desc' | null = null

  pageSize: number = 15 // Número de elementos por página
  currentPage: number = 1
  totalPages: number = 0

  constructor (private readonly OurProfService: OurProfService) {}

  get filteredMembers (): Member[] {
    if (this.filterText === '') {
      return this.membersExample
    }

    const filterValue = this.filterText.toLowerCase()
    return this.membersExample.filter((member) => {
      const locationValue = member.location !== null ? member.location.toLowerCase() : '' // Maneja el caso null

      return (
        member.name.toLowerCase().includes(filterValue) ||
        member.profession.toLowerCase().includes(filterValue) ||
        locationValue.includes(filterValue) // Utiliza la variable con manejo de null
      )
    })
  }

  ngOnInit (): void {
    this.loadMembers()
    // this.sortData('name')
  }

  sortData (column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortColumn = column
      this.sortDirection = 'asc'
    }

    this.membersExample.sort((a: any, b: any) => {
      let aValue = a[column]
      let bValue = b[column]

      // Manejar valores null para location
      if (column === 'location') {
        aValue = aValue !== null ? aValue.toLowerCase() : '' // Si es null, tratar como cadena vacía
        bValue = bValue !== null ? bValue.toLowerCase() : ''
      } else {
        // Para otras columnas, convertimos a minúsculas si no es null
        aValue = aValue !== null ? aValue.toLowerCase() : ''
        bValue = bValue !== null ? bValue.toLowerCase() : ''
      }

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1
      } else if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1
      } else {
        return 0
      }
    })
  }

  changePage (page: number): void {
    if (page < 1 || page > this.totalPages) {
      return
    }
    this.currentPage = page
    this.loadMembers()
  }

  loadMembers (): void {
    this.OurProfService.getMembersPaginated(this.currentPage, this.pageSize).subscribe((data) => {
      this.membersExample = data.members
      this.totalPages = data.totalPageCount
    })
  }
}
