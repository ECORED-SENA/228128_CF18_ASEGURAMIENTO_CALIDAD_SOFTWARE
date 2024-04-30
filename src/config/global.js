export default {
  global: {
    componenteFormativo: 'Diseño de pruebas de carga',
    descripcionCurso:
      'En este componente formativo, se abordará el diseño de pruebas de carga con el objetivo de validar características específicas que representan el rendimiento y las prestaciones ofrecidas al usuario final de una aplicación o plataforma. Esta se somete a prueba con un gran volumen de peticiones o solicitudes, las cuales simulan una carga de trabajo representativa de un escenario previsto durante la operación diaria en un ambiente productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación comparativa de escalabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métricas de evaluación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Niveles de carga',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Instalación y configuración de herramientas de pruebas de rendimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodología para la evaluación de escalabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF18_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '2. Instalación y configuración de herramientas de pruebas de rendimiento.',
      referencia: 'Oracle. (s.f.). <i>Descargas de Java</i>.',
      tipo: 'Web',
      link:
        'https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html',
    },
    {
      tema:
        '2. Instalación y configuración de herramientas de pruebas de rendimiento.',
      referencia:
        'Eruiz. (2022). <i>Instalar Java JDK windows 10</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xr069CmHWcs',
    },
    {
      tema:
        '2. Instalación y configuración de herramientas de pruebas de rendimiento.',
      referencia: 'Apache JMeter. (2021).',
      tipo: 'Instalador (Web Oficial)',
      link: 'https://jmeter.apache.org/',
    },
    {
      tema:
        '2. Instalación y configuración de herramientas de pruebas de rendimiento.',
      referencia: 'Apache Maven. (2021).',
      tipo: 'Instalador (Web Oficial)',
      link: 'https://maven.apache.org/',
    },
    {
      tema:
        '2. Instalación y configuración de herramientas de pruebas de rendimiento.',
      referencia:
        'Bravo, N. (2015). <i>Pruebas de Carga & Stress: JMeter</i>. [Vídeo]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=CdH9Y3MQ33g',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdos de nivel de servicios',
      significado:
        'es un acuerdo escrito entre un proveedor de servicio y su cliente con objeto de fijar el nivel acordado para la calidad de dicho servicio.',
    },
    {
      termino: 'Api',
      significado:
        'la interfaz de programación de aplicaciones, es un conjunto de subrutinas, funciones y procedimientos que ofrece cierta biblioteca para ser utilizada por otro <i>software</i> como una capa de abstracción.',
    },
    {
      termino: '<i>Cluster</i>',
      significado:
        'se aplica a los conjuntos de nodos construidos mediante la utilización de hardware comunes y que se comportan como si fuesen una única computadora.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'es la propiedad deseable de un sistema, una red o un proceso, que indica su habilidad para reaccionar y adaptarse sin perder calidad, o bien manejar el crecimiento continuo de trabajo de manera fluida, o bien para estar preparado para hacerse más grande sin perder calidad en los servicios ofrecidos.',
    },
    {
      termino: 'IDE',
      significado:
        'entorno de desarrollo integrado, es una aplicación informática que proporciona servicios integrales para facilitarle al programador el desarrollo de <i>software</i>.',
    },
    {
      termino: '<i>Key Performance Indicators</i>',
      significado:
        'indicador clave o medidor de desempeño o indicador clave de rendimiento, es una medida del nivel del rendimiento de un proceso.',
    },
    {
      termino: 'Línea base',
      significado:
        'según el estándar de la IEEE es una especificación o producto que ha sido revisado formalmente, sobre el que se ha llegado a un acuerdo, y que de ahí en adelante servirá como base para un desarrollo posterior que puede cambiarse solamente a través de procedimientos formales de control de cambios.',
    },
    {
      termino: '<i>Memory leaks</i>',
      significado:
        'una fuga de memoria es un error de <i>software</i> que ocurre cuando un bloque de memoria reservada no es liberado en una transacción.',
    },
    {
      termino: 'Mesa de ayuda',
      significado:
        'es un conjunto de recursos tecnológicos y humanos, para prestar servicios con la posibilidad de gestionar y solucionar todas las posibles incidencias de manera integral, junto con la atención de requerimientos relacionados con las Tecnologías de la Información y la Comunicación (TIC).',
    },
    {
      termino: '<i>Offline</i>',
      significado: 'indica que no se tiene conexión a la red de internet.',
    },
    {
      termino: '<i>Rampup</i>',
      significado:
        'en informática se puede describir como el aumento exponencial e imprevisto en la carga de peticiones o transacciones en un sistema.',
    },
    {
      termino: '<i>Stakeholder</i>',
      significado:
        'el interesado, parte interesada o involucrado es una persona, organización o empresa que tiene interés en una empresa u organización dada.',
    },
    {
      termino: '<i>Slot</i>',
      significado:
        'ranura de expansiones un conector o puerto de expansión en la placa base de la computadora.',
    },
    {
      termino: '<i>Throughput</i>',
      significado:
        'la tasa de transferencia efectiva es el volumen de trabajo o de información neto que fluye a través de un sistema, como puede ser un sistema software.',
    },
  ],
  referencias: [
    {
      referencia:
        'IEEE. (2000). <i>IEEE Recommended Practice for Architectural Description of Software-Intensive Systems</i>. ',
      link: 'https://ieeexplore.ieee.org/document/875998',
    },
    {
      referencia:
        'Mazano, J. l. (2017). <i>Informes SLA, evita problemas con Pandora FMS</i>. ',
      link: '',
    },
    {
      referencia:
        'Meier, J.D.,et al. (2007). Performance Testing Guidance for Web Applications. ',
      link: '',
    },
    {
      referencia:
        'Oracle. (2010). <i>Introduction to Performance Monitoring. s.l.: Oracle, 2010</i>. Tomada de las presentaciones del curso Oracle University de administración de weblogic. ',
      link: '',
    },
    {
      referencia: 'Torres. A. (2020). <i>Instalar JDK java en Windows 10</i>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Danny Alejandro Solano Concha',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
