<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Instalación y configuración de herramientas de pruebas de rendimiento
    .row.bg-c15.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .col-12.bg-c4
                  .p-4
                    p.mb-0 Una vez revisados y comprendidos los conceptos acerca de la temática de la evaluación de escalabilidad, es posible profundizar en los pasos requeridos para la instalación y configuración de una herramienta de pruebas de rendimiento.
              p.mb-0 Para lograr que el proceso sea lo más satisfactorio posible, se necesita instalar algunas herramientas que se encuentran en internet, las cuales pueden ser gratuitas o #[i premium ] (pagas), con lo cual es posible realizar cualquier tipo de prueba, funcionales, rendimiento o regresión, entre otras. Es importante tener presente que estas herramientas son imprescindibles en el negocio del #[i software], en equipos de alto rendimiento.
            .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width:390px", alt='').m-auto
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
            .tarjeta.color-acento-botones1.p-4
              .row.mb-3
                .col-auto
                  img(src='@/assets/curso/tema2/img3.png' alt='AvatarTop')
              p #[b JMETER]
              p.mb-0 Apache JMeter es una destacada herramienta de código abierto para pruebas de rendimiento y estrés de aplicaciones #[i web], desarrollada por la fundación #[i Apache Software]. Permite generar alta carga para facilitar el análisis de rendimiento y está disponible para descarga gratuita en su página oficial.
            .tarjeta.color-acento-botones1.p-4
              .row.mb-3
                .col-auto
                  img(src='@/assets/curso/tema2/img4.png' alt='AvatarTop')
              p #[b HP LoadRunner]
              p.mb-0 Hewlett-Packard ofrece una alternativa para pruebas de rendimiento y estrés con dos versiones: una de pago en modo SaaS y una gratuita con funcionalidades limitadas en su edición #[i Community].
            .tarjeta.color-acento-botones1.p-4
              .row.mb-3
                .col-auto
                  img(src='@/assets/curso/tema2/img5.png' alt='AvatarTop')
              p #[b OctoPerf]
              p.mb-0 Esta herramienta, basada en Apache JMeter, es de pago y destaca por no requerir instalación. Permite crear y monitorear escenarios, ejecutar pruebas y analizar resultados desde un único punto.
            .tarjeta.color-acento-botones1.p-4
              .row.mb-3
                .col-auto
                  img(src='@/assets/curso/tema2/img6.png' alt='AvatarTop')
              p #[b LoadNinja]
              p.mb-0 La herramienta de SmartBear facilita la realización y ejecución rápida de pruebas de carga, ayudando en el diagnóstico de problemas de rendimiento en sistemas de #[i software]. Ofrece datos precisos, legibles y accionables sin requerir extensas líneas de código.
            .tarjeta.color-acento-botones1.p-4
              .row.mb-3
                .col-auto
                  img(src='@/assets/curso/tema2/img7.png' alt='AvatarTop')
              p #[b WebLOAD]
              p.mb-0 RadView ofrece una alternativa en herramientas de pruebas de rendimiento que destaca por su integridad y escalabilidad. Facilita la simulación de miles de usuarios de manera concurrente o simultánea para identificar puntos de inflexión y cuellos de botella.
    p.mb-5(data-aos="fade-down") Enseguida, realizaremos un ejercicio de instalación. Se ha seleccionado JMeter como herramienta de pruebas debido a que es gratuita, de acceso rápido e intuitiva en su uso. No obstante, es necesario preparar un ambiente #[i web] para realizar las pruebas, por lo que se necesita instalar Java.
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-2.bg-c16(data-aos="fade-right")
        .p-4
          .row.align-items-center.h-100
            .col-12
              figure
                img(src='@/assets/curso/tema2/img2.svg', style="width:60px", alt='').m-auto
      .col-md-8.col-lg-6.bg-c17(data-aos="fade-left")
        .p-4
          p.text-white.mb-0 Según Torres (2020) Java Development Kit es un #[i software] de Oracle que suministra una serie de herramientas de desarrollo para crear aplicaciones en lenguaje de programación Java. Este puede instalarse de manera directa en equipos locales o en servidores en línea y unidades de red, permitiendo la distribución y el trabajo cooperativo.
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c10
            .p-4
              p Como se venía comentando, la aplicación gratuita JMeter ofrece la posibilidad de ejecutar un plan de pruebas de rendimiento de manera fácil y rápida. Gracias a la usabilidad de esta herramienta y el conocimiento obtenido sobre las distintas métricas y valores de carga, se podrá definir una metodología para establecer el plan de pruebas adecuado según el objetivo de la aplicación.
              p.mb-0 A continuación, le invitamos a observar un ejercicio práctico en el que se identifican los pasos de descarga de Jmeter y la manera de realizar un plan de pruebas:
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img8.png', style="width:470px", alt='').m-auto
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="Instalar Jmeter")
        .col-12
          p.mb-0 
      .row(titulo="Caso de prueba")
        .col-12
          p.mb-0 
      .row(titulo="Primer plan de pruebas con interfaz Jmeter")
        .col-12
          p.mb-0 
      .row(titulo="Identificar el proxy")
        .col-12
          p.mb-0 
      .row(titulo="Correr el proxy")
        .col-12
          p.mb-0 
      .row(titulo="Peticiones en Jmeter")
        .col-12
          p.mb-0 
      .row(titulo="Guardar el Script y reconfigurar")
        .col-12
          p.mb-0 
      .row(titulo="Árbol de resultados para ejecutar hilos")
        .col-12
          p.mb-0 
      .row(titulo="Receptor de informe agregado")
        .col-12
          p.mb-0 
      .row(titulo="Simular comportamientos del Script")
        .col-12
          p.mb-0 

</template>

<script>
export default {
  name: 'Tema2',
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
