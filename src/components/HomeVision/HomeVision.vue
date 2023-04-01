<template lang="pug">
.homeVision.container
  .homeVision__wrapper
    h3.homeVision__title {{title}}
    span.homeVision__text {{text}}
    button.homeVision__btn {{btnText}}
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'HomeVision',
  setup() {
    const title = ref('BAUEN MIT HERZBLUT');
    const text = ref(
      'Nachhaltigkeit. Individualität. Kreativität. Das sind die Stützpfeiler, die unseren Bauprojekten das Besondere verleihen. Fest im jeweiligen Standort verwurzelt, entwickeln wir visionäre Neubauimmobilien mit Flair und viel Raum für die Gemeinschaft – und für Sie. Lernen wir uns kennen!'
    );
    const btnText = ref('MEHR ERFAHREN');

    return {
      title,
      text,
      btnText,
    };
  },
};
</script>

<style src="./_homeVision.scss" lang="scss"></style>
