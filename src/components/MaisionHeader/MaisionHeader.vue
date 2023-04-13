<template lang="pug">
.maisionHeader
  .maisionHeader__container.container
    .maisionHeader__leftBlock
      h2.maisionHeader__titleTop {{titleTop}}
      .maisionHeader__imgWrapper
        img.maisionHeader__img(:src='leftImg' loading='lazy' alt='alt')
    .maisionHeader__rightBlock
      .maisionHeader__imgWrapperRight
        img.maisionHeader__img(:src='leftImg' loading='lazy' alt='alt')
      h2.maisionHeader__titleBottom {{titleBottom}}
      p.maisionHeader__text {{text}}
  span.maisionHeader__verticalText {{verticalText}}
</template>

<script>
import { ref } from 'vue';
import leftImg from '@/assets/img/homebg.jpg';
import rightImg from '@/assets/img/newsLetter.jpg';
export default {
  name: 'MaisionHeader',

  setup() {
    const verticalText = ref('LOREMIPSUMDOLORSITAMET/CONSECTEERADIPISCINGELIT');
    const titleTop = ref('Bauen');
    const titleBottom = ref('im Einklang');
    const text =ref('Seit über vier Jahrzehnten zeichnet sich unser Unternehmen in außergewöhnlichen Bauprojekten aus und folgt einer Philosophie der klassischen Werte: Qualität, Zuverlässigkeit und Sicherheit')
    return {
      verticalText,
      leftImg,
      rightImg,
      titleTop,
      titleBottom,
      text
    };
  },
};
</script>

<style src="./_maisionHeader.scss" lang="scss"></style>
