<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-12.bg-c1(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col.order-2.order-lg-1
              p.text-white.mb-0 Bienvenidos a este componente formativo, en el que se abordará el diseño de pruebas de carga. En la industria del #[i software], existe una alta demanda de personal capacitado para determinar las características de rendimiento que presentan los productos o las que se desearían que tuvieran.
            .col-md-auto.order-1.order-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/intro/img1.png', style="width:110px", alt='').m-auto
    .row.mb-5
      .col-12.bg-c2
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img2.png', style="width:350px", alt='').m-auto
            .col.bg-white(data-aos="fade-left")
              .p-3
                p.mb-0 Este personal calificado es capaz de identificar y evaluar atributos de calidad del #[i software] relacionados con la operación de los servicios de teleinformática, una vez que están disponibles como servicios tecnológicos. Esto permite determinar, antes de que los sistemas sean implementados en producción, su capacidad, así como su habilidad para atender a la demanda de un número específico de usuarios.
    p.mb-5(data-aos="fade-right") De este modo, el trabajo en pruebas de rendimiento, un subconjunto de la ingeniería de pruebas, representa una oportunidad de negocio que pocos conocen y explotan. Esta área del conocimiento en el desarrollo de aplicaciones puede ofrecer estabilidad a largo plazo y una carrera sólida a quienes decidan explorarla.
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-4
          .col-12.bg-c3.px-4
            figure.mb-3
              img(src='@/assets/curso/intro/img1.svg', style="width:120px", alt='').m-auto
            p Pero, ¿qué son las pruebas de rendimiento? ¿Cuáles son los procesos que buscan verificar la eficiencia, eficacia, fiabilidad, escalabilidad, velocidad y calidad de respuesta de los sistemas informáticos bajo condiciones de trabajo específicas?
        p.mb-0 Para responder a estas preguntas, le invitamos a revisar este componente formativo, en el que identificará los conceptos básicos sobre evaluación de escalabilidad, instalación y configuración de herramientas de pruebas de rendimiento, y la metodología para realizar esta evaluación. De esta manera, se generan indicadores de calidad para la toma de decisiones de los equipos de desarrollo o la implementación de los sistemas tecnológicos.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img3.png', style="width:350px", alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
