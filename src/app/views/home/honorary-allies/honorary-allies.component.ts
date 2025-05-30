import { Component } from '@angular/core'
import { HonoraryAllie } from '../../../../types'
import { HonoraryAllieCardComponent } from '../../shared/honorary-allie-card/honorary-allie-card.component'

@Component({
  selector: 'app-honorary-allies',
  imports: [HonoraryAllieCardComponent],
  templateUrl: './honorary-allies.component.html',
  styleUrl: './honorary-allies.component.scss'
})
export class HonoraryAlliesComponent {
  public honoraryAllies: HonoraryAllie[] = [
    {
      id: 1,
      name: 'Dr. Luis Azpúrua',
      img: 'images/sponsors/honorarios/azpurua.webp',
      description: 'Médico Cirujano egresado de la Universidad Central de Venezuela, con postgrado de Pediatría en Subespecialidad en Medicina Crítica Pediátrica. Realizó estudios de Gerencia de Centros de Salud en el IESA. Tiene amplia experiencia en gestión del sector salud. Fue parte de la Junta Directiva de la Corporación de Salud del Estado Miranda, y líder del proyecto Nuevo Hospital Pérez de León de Petare. Fue Director Médico del Hospital San Juan de Dios de Caracas, Director de Docencia e Investigación de las Instituciones Prestadoras de Salud de Sanitas Venezuela, Presidente del Comité de Bioética de la Clínica Santa Paula, Director Médico en Digisalud, y Director Médico de la Clínica Santiago de León. Actualmente es director de innovación en PEGASI, emprendimiento dedicado al cierre de la brecha digital existente en Latinoamérica, mediante la promoción de la transformación digital del sector salud. También es profesor universitario en el área de Bioingeniería e Ingeniería Clínica en la Universidad Simón Bolívar y es coautor del Libro “De Autoempleados a Empresarios: Cómo Planificar Estratégicamente un Centro de Salud Privado para Potenciar su Desarrollo"'
    },
    {
      id: 2,
      name: 'Dr. Germán Cortez',
      img: 'images/sponsors/honorarios/cortez.webp',
      description: 'Médico cirujano, ginecólogo y gestor sanitario venezolano con más de cuatro décadas de trayectoria en dirección hospitalaria y salud pública. Egresado de la Universidad Central de Venezuela (UCV), se especializó en Cirugía General (1986) y Ginecología (1989), complementando su formación con estudios en Gerencia en Salud Pública (UCV, 1998). Destacó como Director General de Hospitales del Distrito Federal (1999-2000), Presidente del Grupo Médico Vargas (Clínica Santa Sofía, 2014-actualidad) y representante en salud del Presidente Juan Guaidó (2021). Presidió asociaciones clave del sector, como la Asociación Capital de Clínicas y Hospitales (ACCH) y la Asociación Venezolana de Clínicas y Hospitales (AVCH), impulsando políticas de autonomía hospitalaria.'
    },
    {
      id: 3,
      name: 'Dra. Alba Guadalupe Lobo Dugarte',
      img: 'images/sponsors/honorarios/lobo.webp',
      description: 'Profesional con más de 31 años de experiencia en dirección y gerencia estratégica de hospitales, reconocida por liderar instituciones emblemáticas como el Hospital Oncológico Luis Razetti y el Hospital Oncológico Padre Machado (Venezuela). Experta en diseño, apertura y optimización de centros médicos (hasta 405 camas), con más de 30 asesorías en gestión hospitalaria y proyectos clave como la Clínica Santiago de León y el Centro Médico Integral Careli. Doctora Honoris Causa en Gestión de la Salud (Global Organization for Excellence in Health, 2006) y docente universitaria en epidemiología y administración sanitaria. Ha ocupado roles estratégicos en el Ministerio de Sanidad y contribuido a políticas públicas de salud'
    },
    {
      id: 4,
      name: 'Dr. Saúl Peña',
      img: 'images/sponsors/honorarios/penasi.webp',
      description: 'Magíster en Física Médica, con una trayectoria interdisciplinaria que integra salud pública, gestión tecnológica y análisis de datos. Egresado de la Universidad Central de Venezuela (UCV), complementó su formación con una Especialización en Gerencia y Organización de Empresas (UCV) y una Especialización en Data Science por la Universidad de Harvard. Como Director de SEROFCA, ha impulsado proyectos en seguridad radiológica y gestión sanitaria. Es Profesor de la Escuela de Salud Pública de la Facultad de Medicina de la UCV, donde combina docencia con investigación aplicada.'
    },
    {
      id: 5,
      name: 'Dr. Felipe Siso',
      img: 'images/sponsors/honorarios/sisosi.webp',
      description: 'Médico oftalmólogo egresado de la UCV y especializado en la Universidad de Graz (Austria, 2000). Destacó como fundador del Programa Nacional de Salud Visual de Venezuela (2004-2006) y director de la Comisión Presidencial Misión Milagro, iniciativa clave en la prevención de ceguera. Con experiencia internacional en hospitales de Italia, Nigeria y Alemania, ha combinado su práctica clínica con roles en salud pública y docencia, respaldado por más de 20 publicaciones científicas y dos libros. Candidato a Doctor en Arquitectura (FAU-UCV), ha asesorado más de 20 proyectos arquitectónicos sanitarios, diseñando espacios clínicos funcionales. Complementa su perfil con estudios en Data Science (Harvard), Psicología Junguiana y Alta Gerencia en Salud Pública (UCV), fusionando innovación médica, gestión estratégica y diseño de infraestructuras de salud.'
    },
    {
      id: 7,
      name: 'Msc. Omar Arias',
      description: 'Magister en física médica. Miembro de la junta directiva de la sociedad venezolana de protección radiológica. Miembro honorario de la asociación venezolana de arquitectura e ingeniería médico sanitaria AVAIMS Director de serofca. Profesor de la escuela de salud pública de la facultad de medicina de la Universidad Central de Venezuela. Especialización en gerencia y organización de empresas UCV. Especialización en Data Science Harvard University.',
      img: 'images/sponsors/honorarios/omar.webp'
    },
    {
      id: 12,
      name: 'Dr. Miguel Angel De Lima',
      description: 'Es Médico psiquiatra,  especialista en adicciones, con experiencia laboral en Barcelona, España y en París. Profesor de Psiquiatría y de Historia de la Medicina en la UCV. Premio Nacional de Psiquiatría y Premio a la Investigación "José María Vargas" de la Academia Nacional de Medicina. Ha publicado numerosos artículos científicos en revistas nacionales e internacionales y es autor de varios capítulos de libros de psiquiatría. Expresidente de la Sociedad Venezolana de Psiquiatría, actualmente es Vicepresidente de la Sociedad Venezolana de Historia de la Medicina. Padrino de varias promociones de psiquiatras y psicólogos clínicos y de una promoción de médicos cirujanos de la UCV. Poeta y ensayista, su obra está reseñada en el "Diccionario de escritores venezolanos, Quiénes escriben en Venezuela", de Rivas y García. Es columnista de El Diario de Caracas y colaborador de El Papel Literario del diario El Nacional. Se desempeña como corrector de textos. Es felinófilo y seguidor apasionado de los eléctricos Navegantes del Magallanes.',
      img: 'images/sponsors/honorarios/miguel.webp'
    },
    {
      id: 6,
      name: 'Dr. Pedro Del Medico',
      description: 'Egresado escuela Vargas de la Facultad de Medicina de la UCV y postgrado en Cirugía General en el hospital Vargas, años luego del grado de cirujano, fue designado Jefe de Quirófano, miembro de la Junta de Gobierno del Servicio autónomo Hospital Vargas y finalmente Director Médico de dicho hospital. Maestría en la UCAB en Gerencia de Centros de Salud, además de un grupo de cursos y diplomados en temas gerenciales. Egresado del PAG (ed. 71) del IESA siendo considerado por el comité de profesores como Alumno Destacado (Diploma), de dicha escuela fue Profesor invitado para el “Diplomado Para la Venezuela de hoy: formación de líderes para  Gerencia del sector salud en Venezuela” y Director Médico de la clínica Santa Sofía, Policlínica Metropolitana y Policlínica La Arboleda. Director Ejecutivo de la Asociación Venezolana de Clínicas y Hospitales, asesor externo de la JD de la Policlínica Metropolitana. Actualmente Director General de la Policlínica Metropolitana.',
      img: 'images/sponsors/honorarios/pedro.webp'
    },
    {
      id: 8,
      name: 'Arq. Sonia Cedrés de Bello',
      description: 'Arquitecto y Doctor en Arquitectura por la Universidad Central de Venezuela y Master en Arquitectura por la Universidad de Washington. Profesor Titular de la Facultad de Arquitectura y Urbanismo de la UCV. Investigador sobre edificaciones para la salud. Conferencista y Ponente en Congresos nacionales e internacionales. Autor de libros y artículos en revistas arbitradas. Miembro fundador de AVAIMS y del Grupo Latinoamericano de IFHE. Miembro Honorario de la Academia Nacional de Ingeniería y el Hábitat.',
      img: 'images/sponsors/honorarios/sonia.webp'
    },
    {
      id: 9,
      name: 'Dr. Arturo Alvarado',
      description: 'Licenciado en Biología (USB). Magister Scientiarum en Farmacología, Facultad de Farmacia, UCV. Doctor en Ciencias Fisiológicas, Mención Bioquímica, Facultad de Medicina, UCV. Estudios Postdoctorales en Espectroscopía Cerebral, Universidad de Tubingen, Alemania. Profesor Titular Jubilado, Cátedra de Farmacología y Toxicología, Facultad de Medicina, Escuela Luis Razetti, UCV. Investigador, Centro Diagnóstico Docente Las Mercedes (CDD).',
      img: 'images/sponsors/honorarios/arturo.webp'
    },
    {
      id: 11,
      name: 'Arq. José Gregorio Chacón',
      description: 'Arquitecto egresado de la UCV (1980), con un Postgrado en Planificación Física y Diseño Urbano (Instituto de Urbanismo, UCV, 1982). Su trayectoria de más de 40 años integra planificación urbana, ejercicio libre de la arquitectura y liderazgo gremial. Destaca como Tesorero Nacional del Colegio de Ingenieros de Venezuela (CIV, 2014-actualidad) y expresidente del Centro de Ingenieros del Área Metropolitana (CIAM, 2004-2014), promoviendo normativas urbanísticas y ética profesional. Destaca en proyectos como el Mausoleo de Seboruco (Táchira) y planes zonales en Caracas y Sucre. Docente de Ética Profesional (Universidad Nueva Esparta). Condecorado con la Medalla Vicente Lecuna y reconocimientos del CIV por su gestión gremial y urbanística.',
      img: 'images/sponsors/honorarios/gregorio.webp'
    },
    {
      id: 13,
      name: 'Dr. Alfredo Saldeño',
      description: 'Médico Emergenciólogo. Me he desempeñado en áreas de emergencia de adultos ( Hospital Universitario de Caracas, Hospital Militar "Dr. Carlos Arvelo" de Caracas). Diplomado en gerencia en Salud de la UCAB. Director Médico de Medimóvil, Coordinador Médico de CliniSanitas, Subdirector y Jefe de Emergencia de Clínica Atías, Director Médico de Centro Médico Integra y Director médico de Clínica Sanatrix.',
      img: 'images/sponsors/honorarios/alfredo.webp'
    },
    {
      id: 10,
      name: 'Ing. Enzo Betancourt',
      img: 'images/sponsors/honorarios/enzo.webp',
      description: 'Egresado de la Universidad Santa María (USM) como Ingeniero Civil mención Vías de Comunicación (1990), con posgrados en Gerencia de la Construcción (USM, 1994) y estudios de Maestría en Gerencia Empresarial. Presidente del CIV en dos periodos (2004-2014 y 2014-actualidad), destacó como Vicepresidente de la Unión Panamericana de Ingenieros (UPADI, 2009-2013). Con más de 50 años de trayectoria, inició como Inspector de Obras en el Concejo Municipal de Sucre (1972-1974) y ejerció como docente en la Facultad de Ingeniería de la USM. Actualmente, es Asesor Empresarial en proyectos de ingeniería y arquitectura, especializado en BIM y gestión de infraestructuras. Reconocido con distinciones gremiales por su liderazgo en el sector.'
    }
  ]

  selectedAlly: HonoraryAllie | null = null

  showDetails (ally: HonoraryAllie): void {
    if (this.selectedAlly !== null && this.selectedAlly.id === ally.id) {
      this.selectedAlly = null
      return
    }
    this.selectedAlly = ally
  }

  closeDetails (): void {
    this.selectedAlly = null
  }
}
