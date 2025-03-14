import { Component } from '@angular/core'
import { Notice } from '../../../../types'
import { MyCardComponent } from '../../shared/card/my-card.component'

@Component({
  selector: 'app-notices',
  imports: [MyCardComponent],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent {
  public notices: Notice[] = [
    {

      title: 'Avance Tecnológico Sorprendente',
      description: 'Un nuevo descubrimiento revoluciona la industria tecnológica. Los detalles se revelarán pronto.',
      date: new Date(2024, 5, 15), // 15 de junio de 2024
      img: 'images/team.png',
      url: 'https://ejemplo.com/noticia1'
    },
    {
      title: 'Impactante Evento Climático',
      description: 'Un fenómeno meteorológico sin precedentes azota la región. Se recomienda tomar precauciones.',
      date: new Date(2024, 6, 2), // 2 de julio de 2024
      img: 'images/team.png',
      url: 'https://ejemplo.com/noticia2'
    },
    {
      title: 'Descubrimiento Científico Inesperado',
      description: 'Un equipo de investigadores realiza un hallazgo que podría cambiar nuestra comprensión del universo.',
      date: new Date(2024, 7, 20), // 20 de agosto de 2024
      img: 'images/team.png',
      url: 'https://ejemplo.com/noticia3'
    },
    {
      title: 'Nuevo Programa Educativo Lanzado',
      description: 'Una innovadora iniciativa educativa busca transformar la forma en que aprendemos.',
      date: new Date(2024, 8, 10), // 10 de septiembre de 2024
      img: 'images/team.png',
      url: 'https://ejemplo.com/noticia4'
    },
    {
      title: 'Éxito en la Exploración Espacial',
      description: 'Una misión espacial logra un hito importante en la exploración de nuevos mundos.',
      date: new Date(2024, 9, 5), // 5 de octubre de 2024
      img: 'images/team.png',
      url: 'https://ejemplo.com/noticia5'
    }
  ]
}
