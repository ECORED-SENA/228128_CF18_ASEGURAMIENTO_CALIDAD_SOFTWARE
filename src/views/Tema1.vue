<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evaluación comparativa de escalabilidad
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0
              figure
                img(src='@/assets/curso/tema1/img1.png', style="width:350px", alt='').m-auto
            .col.bg-white
              .p-3
                p.mb-0 Una de las etapas del proceso de desarrollo que genera opiniones divididas en la construcción de una aplicación es la relacionada con las pruebas del sistema. Este paso es crucial para asegurar la calidad del #[i software]; sin embargo, la mayoría de estas pruebas se centran en validar y certificar componentes, módulos o incluso flujos del proceso en un entorno controlado, disponiendo de equipos con gran capacidad a nivel de #[i hardware] que soportan la solución de #[i software].
    .row.mb-5
      .col-12.bg-c4(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:90px", alt='').m-auto
            .col
              p.mb-0 Es importante tener en cuenta que este tipo de #[i testing] minimiza el aseguramiento de la calidad del servicio, ya que no simula el posible potencial de carga y la aleatoriedad de las peticiones que puede recibir la aplicación en un entorno productivo, lo que imposibilita encontrar cuellos de botella en algún componente, modulo o flujo del aplicativo, haciendo que las oportunidades de mejora y escalabilidad disminuyan y los problemas asociados al rendimiento aumenten el tiempo, dinero y la improvisación de soluciones para el equipo de desarrollo.  En este punto se debe realizar un adecuado plan de pruebas de carga para evaluar la escalabilidad y así poder brindar soluciones adecuadas en el momento correcto.
    p.mb-5(data-aos="fade-left") Antes de profundizar en los aspectos centrales de este tema, es importante comprender algunos conceptos fundamentales relacionados con los requisitos técnicos del diseño de cargas. Revisemos, entonces, los términos de escalabilidad y evaluación comparativa.
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-5.bg-c5(data-aos="fade-right")
        .p-4
          p.text-white #[b ¿Qué es la escalabilidad?]
          p.text-white.mb-0 Según Meier et al. (2007), la escalabilidad es la capacidad de una aplicación para manejar carga de trabajo adicional, sin afectar negativamente el rendimiento, añadiendo recursos tales como el procesador, la memoria y la capacidad de almacenamiento.
      .col-md-8.col-lg-3.bg-c6(data-aos="fade-left")
        .p-4
          figure
            img(src='@/assets/curso/tema1/img2.svg', style="width:150px", alt='').m-auto
    p(data-aos="fade-right") Este concepto, a menudo percibido como abstracto, está intrínsecamente vinculado al diseño de la arquitectura de #[i software], ya que un sistema bien diseñado no enfrentará problemas de escalabilidad. Por lo tanto, es posible concluir que la escalabilidad no es un atributo que se pueda configurar en el sistema posteriormente, sino que depende de la implementación y del diseño inicial del mismo.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 La escalabilidad] representa un punto crítico en el crecimiento de un proyecto, ya sea para aumentar el número de usuarios atendidos simultáneamente o para ampliar las funcionalidades ofrecidas. #[b Esto implica que un líder debe evaluar dos posibles enfoques, representados por los siguientes ejemplos]:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-5.bg-c7(data-aos="fade-right")
        .p-5
          figure.mb-3
            img(src='@/assets/curso/tema1/img4.svg', style="width:160px", alt='').m-auto
          p.text-white #[b Mejorar en combinación el #[i hardware] y #[i software]]
          p.text-white.mb-0 #[b.txt-c2 Ejemplo:] pasar de almacenar en un servidor de base de datos local con MySQL versión 5.0 a un almacenamiento en Amazon Web Services con Aurora DB.
      .col-md-8.col-lg-5.bg-c8(data-aos="fade-left")
        .p-5
          figure.mb-3
            img(src='@/assets/curso/tema1/img5.svg', style="width:160px", alt='').m-auto
          p #[b Aumentar las capacidades y la potencia del #[i hardware]]
          p.mb-0 Ejemplo: pasar de una máquina con 16 GB de memoria RAM y un disco duro mecánico de 500 GB a una máquina de 32 GB de RAM y un disco duro de estado sólido de 1TB.
    p.mb-5(data-aos="fade-right") #[b Es importante conocer que la escalabilidad también se clasifica en vertical y horizontal, tal como se explica a continuación:]
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3 Escalabilidad vertical
    p.mb-5(data-aos="fade-right") Se trata básicamente de añadir recursos en un solo componente o nodo #[i hardware] dentro del sistema, aumentando más memoria RAM, más capacidad de almacenamiento del disco duro o agregando en nuevos #[i slot] componentes de los anteriormente mencionados.
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-4
          .col-12.bg-c10
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', style="width:70px", alt='').m-auto
                .col
                  p.mb-0 #[b Ventajas:] el #[i software] no se ve afectado por el proceso, además la arquitectura inicial no necesita realizar cambio alguno y el impacto en codificación es mínimo o nulo.
        .row.mb-4
          .col-12.bg-c10
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img8.svg', style="width:70px", alt='').m-auto
                .col
                  p.mb-0 #[b Desventajas:] los componentes #[i hardware] tienen una limitación de fábrica, es decir, llegará el momento en que no podrán mejorar, aún más, la memoria RAM.
        .row
          .col-12.bg-c10
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img9.svg', style="width:70px", alt='').m-auto
                .col
                  p.mb-0 A nivel económico: el costo en #[i hardware] de alta prestación se aumenta, teniendo en cuenta que cuando un dispositivo llega al umbral máximo se tratará como tecnología de punta, lo que en ocasiones no es asumible por un proyecto.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width:380px", alt='').m-auto
    .row.mb-4
      .col-auto.bg-c9(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3 Escalabilidad horizontal
    p.mb-5(data-aos="fade-right") Este tipo de escalabilidad significa agregar más nodos o componentes con las mismas características que el sistema ya tiene, por lo general, este nuevo integrante funciona a modo de respaldo y/o espejo.
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-4
          .col-12.bg-c10
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', style="width:70px", alt='').m-auto
                .col
                  p.mb-0 #[b Ventajas:] es posible crecer constantemente y con un bajo costo económico, además de que el mantenimiento es simplificado por lo simple de los nodos o componentes del #[i cluster].
        .row
          .col-12.bg-c10
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img8.svg', style="width:70px", alt='').m-auto
                .col
                  p.mb-0 #[b Desventajas:] este modelo implica un cambio sustancial en el diseño y la arquitectura planteada para un único componente o nodo, obligando a modificar código y, en ocasiones, a reestructurar completamente la solución #[i software], lo que presume un gran esfuerzo y tiempo por parte del equipo.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.png', style="width:390px", alt='').m-auto
    p.mb-5(data-aos="fade-right") #[b Para continuar, se indaga sobre el concepto Evaluación comparativa:]
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-c.color-secundario.p-4(data-aos="fade-down")
          i.fas.fa-quote-right
          p.mb-2 #[b De acuerdo con Mejer et al. (2007), la evaluación comparativa es el proceso de comparar el rendimiento de un sistema con una línea de base que se ha establecido internamente o con un estándar de la industria avalado por alguna otra organización.]
          span Mejer et al. (2007)
    p.mb-5(data-aos="fade-right") Se pueden emplear dos formas de establecer la evaluación comparativa de escalabilidad: #[b.txt-c1 el Acuerdo de Nivel de Servicio (SLA) y Comparativa con una línea base.] Veamos en qué consiste cada una:
    .row.bg-c11.mb-5
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c9(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 Acuerdo de Nivel de Servicio SLA
          p.mb-5(data-aos="fade-right") Los Acuerdos de Nivel de Servicio (Service Level Agreements, SLA) representan una de las primeras maneras de definir las metas que los sistemas deben alcanzar. #[b Pero, ¿qué es un SLA?, ¿qué determina? y ¿cuáles son sus ventajas? Para responder a estas preguntas, lo invitamos a revisar el siguiente recurso:]
          .row.align-items-center.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row(titulo="¿Qué es SLA?")
                  .col-12
                    p.mb-0 Es un contrato celebrado entre un proveedor de un servicio y su cliente, que tiene como objetivo establecer niveles (valores) para la calidad con la cual se prestará el servicio ofrecido en contraparte. Dentro del área del #[i software], es una herramienta que brinda a las partes unos términos aprobados a nivel de calidad en la experiencia del usuario al usar un producto o servicio, en aspectos como tiempo de respuesta, ayudas en la plataforma (documentación fácil y disponible), disponibilidad horaria 7 por 24, mesa de ayuda (HelpCenter, mesa de Ayuda).
                .row(titulo="¿Qué establece?")
                  .col-12
                    p.mb-0 Un objetivo es aquella meta a la cual se desea llegar, como por ejemplo, incrementar la cantidad de visitas o aumentar el tiempo de permanencia de un usuario en la navegación de un portal. Por otro lado, el target se expresa de forma numérica, es el estado al cual se desea llegar y está directamente relacionado con los objetivos propuestos, por ejemplo, se desea llegar a 50.000 visitas diarias.
                .row(titulo="¿Qué beneficios ofrece?")
                  .col-12
                    p.mb-0 Según Mazano (2017) un SLA puede definir un punto del cual partir para la mejora continua en los procesos y procedimientos, ya que ofrece una adecuada medición en términos comunes entre ambas partes plasmadas en el documento a fin de realizar una renegociación y mejorar cada punto ya estipulado brindando una mejor experiencia de usuario y calidad en el servicio.
            .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img10.svg', style="width:460px", alt='').m-auto
          p.mb-4(data-aos="fade-down") #[b Parámetros habituales]
          p.mb-5(data-aos="fade-right") Un acuerdo de nivel de servicio puede incluir una amplia variedad de parámetros que se alinean con un objetivo específico del nivel de servicio. A continuación, se ofrecen algunos ejemplos:
          .tarjeta.tarjeta--gris1.mb-5(data-aos="fade-right")
            .p-5
              PasosB.color-acento-contenido
                .row.justify-content-center.align-items-center(titulo="Tasa de abandono")
                  .col-lg-5.mb-4.mb-lg-0
                    p.text-white #[b Tasa de abandono]
                    p.text-white.mb-0 Porcentaje de solicitudes abandonadas mientras esperaban recibir atención.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img11.svg', style="width:150px", alt='').m-auto
                .row.justify-content-center.align-items-center(titulo="Tiempo medio de atención")
                  .col-lg-5.mb-4.mb-lg-0
                    p.text-white #[b Tiempo medio de atención]
                    p.text-white.mb-0 Tiempo medio normalmente medido en segundos, utilizado para que la mesa de ayuda responda una solicitud.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:150px", alt='').m-auto
                .row.justify-content-center.align-items-center(titulo="Factor del tiempo de nivel de servicio")
                  .col-lg-5.mb-4.mb-lg-0
                    p.text-white #[b Factor del tiempo de nivel de servicio]
                    p.text-white.mb-0 Porcentaje de solicitudes respondidas en un plazo de tiempo determinado, ejemplo 80% en 20 segundos.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:150px", alt='').m-auto
                .row.justify-content-center.align-items-center(titulo="Resolución en la primera solicitud")
                  .col-lg-5.mb-4.mb-lg-0
                    p.text-white #[b Resolución en la primera solicitud]
                    p.text-white.mb-0 Porcentaje de solicitudes recibidas que pudieron ser resueltas sin necesidad de una segunda solicitud.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img14.svg', style="width:150px", alt='').m-auto
                .row.justify-content-center.align-items-center(titulo="Tiempo de respuesta")
                  .col-lg-5.mb-4.mb-lg-0
                    p.text-white #[b Tiempo de respuesta]
                    p.text-white.mb-0 Tiempo utilizado para completar una tarea determinada.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img15.svg', style="width:150px", alt='').m-auto
          p.mb-5(data-aos="fade-left") Es así que los SLA en general representan para cualquier línea de negocio el reflejo claro y conciso de dos elementos; por un lado, describen los servicios que se cubren bajo el contrato del SLA y además el nivel operativo estándar o normal.
    .row.bg-c12
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c9(data-aos="fade-down")
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.pe-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 Comparativa con una línea base
          p.mb-5(data-aos="fade-right") Por tanto, los SLA, en general, representan para cualquier línea de negocio un reflejo claro y conciso de dos elementos esenciales: por un lado, describen los servicios que se incluyen bajo el contrato del SLA y, por otro, el nivel operativo estándar o habitual.
          .row.align-items-center.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              .cajon.color-acento-botones
                .p-4
                  p.mb-0 Este procedimiento exige llevar a cabo un registro completamente detallado y documentado de las métricas de rendimiento del sistema de manera general, abarcando todos los módulos necesarios y recolectando muestras de los parámetros que se consideren importantes o adecuados para validar la eficiencia y efectividad del sistema, y/o para servir como referencia en el futuro.
            .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img16.svg', style="width:440px", alt='').m-auto
          p.mb-5(data-aos="fade-right") Este tipo de pruebas permite asegurar que el rendimiento del sistema no se degrade con el paso del tiempo, soportando cambios que, en principio, buscan mejorar la escalabilidad y el tamaño del sistema. Sin embargo, en el evento de que las medidas base se deterioren, es posible identificar los puntos críticos o fallas para implementar medidas correctivas que restablezcan el sistema a los parámetros de la línea base. Esto garantiza que la experiencia del usuario no se vea alterada y, por el contrario, perciba una mejora sustancial y continua en la aplicación.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1.	Métricas de evaluación
    p(data-aos="fade-right") Durante el procedimiento de evaluación de la escalabilidad de un sistema, es esencial tener en cuenta ciertos parámetros cuantificables clave para caracterizar su rendimiento, como el tiempo de respuesta, la latencia, la utilización de recursos, entre otros. Estos parámetros facilitan la estimación de la capacidad del sistema para incrementar el número de usuarios y/o solicitudes sin comprometer la calidad del servicio ofrecido.
    p.mb-5(data-aos="fade-right") #[b A continuación, se presentan algunas métricas de evaluación para facilitar su identificación:]
    .tarjeta.tarjeta--gris1.mb-5(data-aos="fade-left")
      .p-5
        PasosB.color-acento-contenido
          .row.justify-content-center.align-items-center(titulo="Tiempo de respuesta")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Tiempo de respuesta]
              p.text-white.mb-0 Tiempo transcurrido entre el inicio de una solicitud o comando a un sistema informático y el principio de la respuesta del sistema (IEEE, 2000).
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img17.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Latencia")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Latencia]
              p.text-white.mb-0 Tiempo entre la emisión de una solicitud y el comienzo de procesos reales en el servidor de esa petición (cuando inicia la transferencia de datos).
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img18.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="<i>Throughput</i>")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b #[i Throughput]]
              p.text-white.mb-0 Según Meier et al. (2007) se refiere al número de unidades de trabajo que se puede manejar por unidad de tiempo (rendimiento) por ejemplo, las solicitudes por segundo, las solicitudes por día, visitas por segundo informe, por año, etc.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img19.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Utilización de recursos")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Utilización de recursos]
              p.text-white.mb-0 Métrica de un consumo del recurso tecnológico como el procesador, la memoria, el disco E/S, y la red I/O.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img20.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Tiempo de carga")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Tiempo de carga]
              p.text-white.mb-0 Tiempo que transcurre entre la solicitud y la respuesta de lectura de información que se busca dentro de los componentes de almacenamiento, ya sea de largo plazo como el disco duro o de corto plazo como la memoria RAM. También es posible aplicarlo a los procesos de asignación de memoria inicial la cual es reservada para ser usada durante un proceso por el programa (IEEE, 2000).
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img21.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Tasa de errores")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Tasa de errores]
              p.text-white.mb-0 Meier y otros (2007) indican que es la relación entre el número de elementos erróneos que pueden ser bits, datos código o bloques, en una señal digital recibida y el número total de elementos emitidos durante un intervalo de tiempo determinado.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img22.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Usuarios simultáneos")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Usuarios simultáneos]
              p.text-white.mb-0 El término se refiere a la característica de un sistema de proveer un servicio y/o procesamiento a múltiples usuarios conectados al mismo instante de tiempo.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img23.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Solicitudes por segundo")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Solicitudes por segundo]
              p.text-white.mb-0 Tasa de peticiones que puede soportar un sistema en función del tiempo (IEEE, 2000).
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img24.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Transacciones satisfactorias/fallidas")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Transacciones satisfactorias/fallidas]
              p.text-white.mb-0 Diferencia entre el número de peticiones al sistema que terminaron con una respuesta apropiada frente al mismo número de peticiones pero que terminaron con respuesta errada.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img25.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Utilización de la CPU")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Utilización de la CPU]
              p.text-white.mb-0 Nivel de ocupación (carga) y el tiempo de procesamiento de datos que le toma al equipo #[i hardware] la gestión de la solicitud.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img26.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Utilización de la memoria")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b Utilización de la memoria]
              p.text-white.mb-0 Nivel de ocupación (carga) y el tiempo de procesamiento de datos que le toma a la memoria de corta duración RAM la gestión de la solicitud.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img27.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="E/S de disco")
            .col-lg-6.mb-4.mb-lg-0
              p.text-white #[b E/S de disco]
              p.text-white.mb-0 Diferencia entre el número de procesos que realizan un evento de entrada y uno de salida en el disco duro del componente.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img28.svg', style="width:150px", alt='').m-auto
    p.mb-5(data-aos="fade-down") Una prueba de rendimiento tiene como objetivo evaluar el comportamiento de la aplicación en un entorno de producción cuando se enfrenta a una gran demanda de uso (grandes cantidades de peticiones y transacciones). Existe una amplia variedad de pruebas de este tipo; no obstante, solo se explorarán las siguientes:
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oNY2a2_yOps?si=C1fChRF7eX597J1V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2.	Niveles de carga
    p.mb-5(data-aos="fade-right") Los niveles de carga para una prueba dependen en gran medida de la estrategia planificada, la cual se fundamentará en el estado actual de la aplicación. Esto implica un análisis de la infraestructura, la tecnología utilizada, entre otros aspectos, así como el conocimiento de los problemas existentes, los módulos que realmente requieren validación y los objetivos que se pretenden alcanzar a futuro con la aplicación.
    .row.mb-5
      .col-12.bg-c5(data-aos="fade-up")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0
              figure
                img(src='@/assets/curso/tema1/img7.png', style="width:300px", alt='').m-auto
            .col.bg-white.mt-0.mt-lg-4
              .p-3
                p.mb-0 Con este propósito, resulta crucial recopilar información de las distintas áreas de la empresa que interactúan con la aplicación, así como de los propios clientes finales. Su perspectiva y percepción sobre el producto ofrecido pueden influir significativamente en la modificación y refinamiento de los objetivos de las pruebas y, por consiguiente, en los niveles de carga.
    .row.bg-c13.mb-5
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") #[b De esta manera, los niveles de carga varían acorde a los tipos de prueba, de la siguiente manera:]
          .row.justify-content-center
            .col-lg-10.d-none.d-lg-block(data-aos="fade-right")
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/img29.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="14.5%" y="67.7%" numero="+")
                  p.mb-0 Inicia con un número bajo de usuarios, peticiones y/o transacciones; puede ser en un porcentaje de 10% de la capacidad que se cree soporta o se aspira para la aplicación y se va aumentando en pasos de valores enteros (al 20%, al 40%, etc.) hasta llegar al 100% de la capacidad que alcance la aplicación. Tomando muestras en cada nuevo paso de la respuesta observada.
                .tarjeta.color-acento-botones.p-3(x="37.5%" y="67.7%" numero="+")
                  p.mb-0 Este tipo de nivel de carga depende del anterior; dado que, es necesario comprender de antemano el punto crítico de falla de la aplicación, para llevar el test a valores por encima o por debajo durante un tiempo determinado que debe ir variando dependiendo de la estrategia que se desee analizar (horas pico de la aplicación, nivel más alto de carga, horas de la noche, entre otros).
                .tarjeta.color-acento-botones.p-3(x="60%" y="67.7%" numero="+")
                  p.mb-0 De la misma forma que el anterior modo, pero manteniendo el proceso por más tiempo a fin de simular un flujo constante de peticiones y/o transacciones.
                .tarjeta.color-acento-botones.p-3(x="83.8%" y="67.7%" numero="+")
                  p.mb-0 Este método consiste en lanzar diferentes pruebas con carga muy alta que llegue a niveles cercanos al 100% y luego cargas muy bajas del orden del 10%, para analizar cómo responde el sistema después de un pico tan alto, o cuánto le toma al sistema recuperarse si hubo fallas.
            .col-lg-10.d-block.d-lg-none(data-aos="fade-left")
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/img29m.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="50.1%" y="28.1%" numero="+")
                  p.mb-0 Inicia con un número bajo de usuarios, peticiones y/o transacciones; puede ser en un porcentaje de 10% de la capacidad que se cree soporta o se aspira para la aplicación y se va aumentando en pasos de valores enteros (al 20%, al 40%, etc.) hasta llegar al 100% de la capacidad que alcance la aplicación. Tomando muestras en cada nuevo paso de la respuesta observada.
                .tarjeta.color-acento-botones.p-3(x="50.1%" y="50.6%" numero="+")
                  p.mb-0 Este tipo de nivel de carga depende del anterior; dado que, es necesario comprender de antemano el punto crítico de falla de la aplicación, para llevar el test a valores por encima o por debajo durante un tiempo determinado que debe ir variando dependiendo de la estrategia que se desee analizar (horas pico de la aplicación, nivel más alto de carga, horas de la noche, entre otros).
                .tarjeta.color-acento-botones.p-3(x="50.1%" y="73.1%" numero="+")
                  p.mb-0 De la misma forma que el anterior modo, pero manteniendo el proceso por más tiempo a fin de simular un flujo constante de peticiones y/o transacciones.
                .tarjeta.color-acento-botones.p-3(x="50.2%" y="95.6%" numero="+")
                  p.mb-0 Este método consiste en lanzar diferentes pruebas con carga muy alta que llegue a niveles cercanos al 100% y luego cargas muy bajas del orden del 10%, para analizar cómo responde el sistema después de un pico tan alto, o cuánto le toma al sistema recuperarse si hubo fallas.
    .row.mb-5
      .col-12.bg-c4(data-aos="fade-down")
        .p-4
          p.mb-0 También es crucial revisar los tipos de fallas que el equipo de pruebas debe estudiar, quienes se esfuerzan constantemente por identificar problemas en los sistemas que evalúan, buscando amenazas potenciales o procesos que puedan desencadenar resultados indeseados.
    p.mb-0(data-aos="fade-right") En el ámbito de las pruebas de rendimiento, hay fallos comunes que ya están plenamente identificados y que es esencial detectar con facilidad para, por ende, resolverlos de la mejor manera posible. A continuación, se listan los siguientes:
    .row.bg-c14
      .col-12
        .p-5
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row.align-items-center(titulo="Cuellos de botella")
                  .col-md.order-2.order-md-1
                    p.mb-0 En sistemas, los recursos #[i hardware], #[i software] y la red pueden limitar el flujo de información y velocidad de transmisión, creando posibles cuellos de botella. Estos errores permiten a los testers identificar componentes problemáticos durante pruebas de carga y estrés, afectando el rendimiento y escalabilidad al limitar el procesamiento de información y conexiones de usuarios simultáneos.
                  .col-md-auto.order-1.order-md-2.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img30.svg', style="width:90px", alt='').m-auto
                .row.align-items-center(titulo="Procesos zombies")
                  .col-md.order-2.order-md-1
                    p.mb-0 En el ámbito del desarrollo de #[i software], las transacciones y eventos están vinculados a procesos en el #[i hardware], interconectados por la complejidad de las aplicaciones multifuncionales. Esta interacción crea una estructura de árbol donde los procesos están interrelacionados, pero cuando un proceso hijo finaliza y el padre no recicla correctamente este proceso finalizado, surge un “proceso zombie”. Las pruebas de resistencia son clave para detectar estos errores.
                  .col-md-auto.order-1.order-md-2.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img31.svg', style="width:90px", alt='').m-auto
                .row.align-items-center(titulo="Conexiones sin cerrar o colgadas")
                  .col-md.order-2.order-md-1
                    p.mb-0 Al igual que los procesos zombies, las conexiones sin cerrar ocurren por eventos disparados desde la aplicación hacia el servidor de base de datos, resultado de transacciones que no confirman su cierre. Esto provoca que la conexión quede bloqueada, impidiendo su uso por otros eventos o procesos hasta que la base de datos deja de responder a las solicitudes de la aplicación.
                  .col-md-auto.order-1.order-md-2.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img32.svg', style="width:90px", alt='').m-auto
                .row.align-items-center(titulo="Fugas de memoria")
                  .col-md.order-2.order-md-1
                    p.mb-0 Al ejecutar eventos en una aplicación, se solicitan recursos que llevan a que el #[i hardware] reserve bloques de memoria RAM de corto plazo. Una vez concluido el evento, se espera que este bloque de memoria se libere para su reutilización. Sin embargo, si el sistema no logra liberar correctamente estos bloques de memoria, se generan espacios bloqueados pero inutilizados, lo que eventualmente puede llevar a la imposibilidad de solicitar más memoria por estar aparentemente toda ocupada.
                  .col-md-auto.order-1.order-md-2.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img33.svg', style="width:90px", alt='').m-auto
                .row.align-items-center(titulo="Fallos de configuración")
                  .col-md.order-2.order-md-1
                    p.mb-0 Este tipo de error surge del control que el programador del sistema ejerce, ya que es este quien modifica los parámetros predeterminados en los componentes de #[i software] y #[i hardware] para realizar configuraciones personalizadas de estas herramientas.
                  .col-md-auto.order-1.order-md-2.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img34.svg', style="width:90px", alt='').m-auto
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img9.png', style="width:300px", alt='').m-auto
          p.mb-0(data-aos="fade-left") Las métricas mencionadas, los tipos de pruebas, los niveles de carga, y los tipos de fallas son esenciales en el proceso de evaluación de la escalabilidad de un sistema de #[i software]. Resulta crucial definir una hoja de ruta para las pruebas, lo que implica la necesidad de identificar el tipo de pruebas a ejecutar para establecer un plan basado en una metodología que evalúe la escalabilidad de un sistema de #[i software] mediante el uso de una herramienta que facilite el abordaje de estos parámetros.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
