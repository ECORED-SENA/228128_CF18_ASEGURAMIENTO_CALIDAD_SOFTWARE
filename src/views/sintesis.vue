<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La figura presenta la síntesis  que relaciona conceptos de escalabilidad y métricas de rendimiento con la ejecución de diferentes tipos de pruebas y una metodología para evaluar la escalabilidad. Empieza con la diferenciación de la escalabilidad en vertical y horizontal. Luego, se aborda la evaluación de métricas, destacando la importancia de parámetros cuantificables, acuerdos de nivel de servicio y la comparación con un estándar. Se detallan varios tipos de pruebas: carga, estrés, resistencia, estabilidad y picos, cada una asociada a patrones específicos de carga. Finalmente, describe un proceso metodológico que incluye la planificación de las pruebas, la evaluación del entorno, la selección de métricas y niveles de carga, la definición de casos de prueba y su ejecución.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
