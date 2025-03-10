import { Component } from '@angular/core'

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  public services = [
    {
      title: 'Asesorías en consulta de normativas venezolanas',
      description: 'Expertos en regulaciones para el sector médico.',
      icon: 'fa-balance-scale'
    },
    {
      title: 'Planificación y programación de servicios hospitalarios',
      description: 'Optimización y eficiencia en la gestión hospitalaria.',
      icon: 'fa-solid fa-calendar-days'
    },
    {
      title: 'Consulta en el planteamiento de proyectos médicos',
      description: 'Apoyo integral en proyectos de desarrollo sanitario.',
      icon: 'fa-solid fa-gears'
    },
    {
      title: 'Cursos y actualizaciones tecnológicas',
      description: 'Formación continua para profesionales de la salud.',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'Ponencias y conversatorios con expertos',
      description: 'Conocimiento de vanguardia en el área médica.',
      icon: 'fa-microphone'
    },
    {
      title: 'Visitas técnicas a instituciones médicas',
      description: 'Experiencia práctica en centros de referencia.',
      icon: 'fa-building'
    },
    {
      title: 'Intercambios institucionales',
      description: 'Colaboración entre sectores público y privado.',
      icon: 'fa-exchange'
    },
    {
      title: 'Aval para emprendimientos de alta complejidad',
      description: 'Respaldo a proyectos innovadores en salud.',
      icon: 'fa-check-circle'
    }
  ]
}
