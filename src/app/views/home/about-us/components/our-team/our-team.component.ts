import { Component } from '@angular/core'

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
  standalone: true
})
export class OurTeamComponent {
  public team = [
    {
      prof: 'Arq',
      name: 'Jorge Garrido',
      role: 'Presidente'
    },
    {
      prof: 'Arq',
      name: 'Fabiola Panitz',
      role: 'VicePresidente'
    },
    {
      prof: 'Arq',
      name: 'Rafael Febres-Cordero',
      role: 'Tesorero'
    },
    {
      prof: 'Arq',
      name: 'Yurima Diaz',
      role: 'Secretario'
    },
    {
      prof: 'Arq',
      name: 'Marco Palladino',
      role: 'Vocal 1'
    },
    {
      prof: 'Ing',
      name: 'Nelson Plasencia',
      role: 'Vocal 2'
    },
    {
      prof: 'Arq',
      name: 'Alvaro Bonilla',
      role: 'Vocal 3'
    }
  ]
}
