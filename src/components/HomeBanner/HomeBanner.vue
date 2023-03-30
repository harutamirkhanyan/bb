<template lang="pug">
.homeBannerBG.container
  .homeBannerBG__img
  .homeBanner
    .homeBanner__titleBlock
      h1.homeBanner__title(v-html='title')
      span.homeBanner__description(v-html='description')
    span.homeBanner__vertical {{verticalTExt}}
    .homeBanner__bottomBlock
      h2.homeBanner__title
        div.homeBanner__ingo
          p.homeBanner__name
            span Sinn
            img.homeBanner__img(:src='logo' loading='lazy' alt='logo')
          span Sinnlichkeit
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/img/homeBannerLogo.png';
export default {
  name: 'BbHeader',
  setup() {
    const title = ref('Archi <br> tektur <br> mit');
    const description = ref(
      'Architektur, Bauerherr & Projektentwickler für visionäre Immobilien in und um München. <br> Geschaffen für das Wohnen und Arbeiten im Morgen.'
    );
    const titleTwo = ref('Sinn <br> Sinnlichkeit');
    const verticalTExt = ref('LOREMIPSUMDOLORSITAMET/CONSECTEERADIPISCINGELIT');
    const bottomTitle = ref('Sinn Sinnlichkeit');
    return {
      title,
      description,
      titleTwo,
      verticalTExt,
      bottomTitle,
      logo
    };
  },
};
</script>

<style src="./_homeBanner.scss" lang="scss"></style>
