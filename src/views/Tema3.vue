<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Metodología para la evaluación de escalabilidad
    .row.bg-c18.mb-5
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") Las pruebas de rendimiento requieren de una estrategia bien planificada para asegurar que los objetivos iniciales y los resultados esperados coincidan con lo deseado por todo el equipo de trabajo. El planteamiento metodológico siguiente es el proceso más importante, ya que define el alcance de dichas pruebas de rendimiento, la directriz del nivel de carga y los objetivos de nivel de servicio (SLO). Es decir, determina las partes o módulos que serán objeto de estudio y los acuerdos de nivel de servicio (SLA), así como la expectativa de calidad en el servicio prestado que se espera reciba el cliente final. Por lo tanto, siempre que se necesite elaborar una metodología para la evaluación, se deben adoptar las cinco etapas mencionadas a continuación:
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-4.order-2.order-lg-1.bg-c19(data-aos="fade-right")
              .p-4
                ul.lista-ul.mb-0
                  li 
                    i.fas.fa-circle
                    | Planificación de las pruebas.
                  li 
                    i.fas.fa-circle
                    | Evaluación del entorno de pruebas.
                  li 
                    i.fas.fa-circle
                    | Selección de métricas y niveles de carga.
                  li 
                    i.fas.fa-circle
                    | Definición casos de prueba.
                  li 
                    i.fas.fa-circle
                    | Ejecución de las pruebas.
            .col-md-8.col-lg-4.order-1.order-lg-2.bg-c20(data-aos="fade-left")
              .p-4
                figure
                  img(src='@/assets/curso/tema3/img1.svg', style="width:220px", alt='').m-auto
    p.mb-5(data-aos="fade-right") #[b Le invitamos a revisar el siguiente contenido para conocer los elementos que se deben tener en cuenta en cada una de estas etapas:]
    .tarjeta.tarjeta--gris1.mb-5(data-aos="fade-left")
      .p-5
        PasosB.color-acento-contenido
          .row.justify-content-center.align-items-center(titulo="Planificación de las pruebas")
            .col-lg-9.mb-4.mb-lg-0
              p.text-white #[b Planificación de las pruebas]
              p.text-white.mb-0 En esta etapa inicial, el equipo debe identificar las razones para realizar pruebas de rendimiento, como cambios tecnológicos o expansión de clientes, mediante un análisis detallado del estado actual de la aplicación. Esto permitirá establecer objetivos claros y alcanzables. Es crucial determinar qué componentes de la aplicación modular necesitan ser probados y cuáles no, para asegurar una evaluación efectiva.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Evaluación del entorno de pruebas")
            .col-lg-9.mb-4.mb-lg-0
              p.text-white #[b Evaluación del entorno de pruebas]
              p.text-white.mb-0 Esta etapa, se enfoca en identificar detalladamente las características, herramientas, tecnologías y versiones del aplicativo para elegir correctamente el tipo de pruebas de rendimiento y la herramienta más adecuada, considerando costos, esfuerzo y tiempo.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Selección de métricas y niveles de carga")
            .col-lg-9.mb-4.mb-lg-0
              p.text-white #[b Selección de métricas y niveles de carga]
              p.text-white.mb-0 Esta etapa  del proceso implica estrecha conexión con etapas anteriores, enfocándose en la selección de parámetros para pruebas de rendimiento basada en la asesoría de expertos y en objetivos claros establecidos inicialmente, con el fin de identificar las causas principales de problemas detectados.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img4.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Definición casos de pruebas")
            .col-lg-9.mb-4.mb-lg-0
              p.text-white #[b Definición casos de pruebas]
              p.text-white.mb-0 Esta etapa, la más analítica, involucra definir la carga de trabajo esperada como referencia (número de conexiones, solicitudes, etc.), y establecer objetivos de rendimiento basados en la percepción del usuario, que pueden concretarse en acuerdos de nivel de servicio. También requiere seleccionar los subsistemas a #[i testear], considerando la variedad de procesos de negocio y estimar el flujo de negocio para las pruebas. Adicionalmente, se puede realizar un #[i benchmark], comparando la carga esperada en la aplicación con #[i software] similar en tecnología y condiciones.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img5.svg', style="width:150px", alt='').m-auto
          .row.justify-content-center.align-items-center(titulo="Ejecución de las pruebas")
            .col-lg-9.mb-4.mb-lg-0
              p.text-white #[b Ejecución de las pruebas]
              p.text-white.mb-0 En la etapa final, se llevan a cabo y gestionan las pruebas, registrando los resultados para elaborar informes, gráficas, tablas comparativas y matrices de correlación que faciliten la interpretación de los datos de forma clara y eficiente para el equipo. Luego, se ajustan las fallas detectadas y se repiten las pruebas para alcanzar los objetivos establecidos al principio de la metodología.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/img6.svg', style="width:150px", alt='').m-auto
    .row.align-items-center
      .col-md-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img7.svg', style="width:90px", alt='').m-auto
      .col(data-aos="fade-left")
        p.mb-0 En esta sección, se han unificado los conocimientos y herramientas para desarrollar una metodología que permita completar un plan de pruebas de rendimiento. #[b Este plan se basa en cinco procesos: la planificación, la evaluación del entorno, la selección de métricas y niveles, la definición de casos y la ejecución de las pruebas]. El propósito de estos procesos es cumplir con los objetivos trazados para realizar mejoras o ajustes relacionados con el rendimiento de la aplicación.

</template>

<script>
export default {
  name: 'Tema3',
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
