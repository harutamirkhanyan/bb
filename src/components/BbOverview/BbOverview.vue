<template lang="pug">
.overview
  h5.overview__title HALTUNG
  .overview__content
    .overview__row.overview__row--spaceAround
      .overview__imgWrapper
        img.overview__img(:src='overviewOne' alt='alt' loading='lazy')
      .overview__imgWrapper
        img.overview__img(:src='overviewTwo' alt='alt' loading='lazy')
    .overview__row.overview__row--centerRight
      .overview__imgWrapper
        img.overview__img(:src='overviewThree' alt='alt' loading='lazy')
    .overview__row.overview__row--centerLeft
      .overview__imgWrapper
        img.overview__img(:src='overviewFour' alt='alt' loading='lazy')
    span.overview__description {{description}}
    span.overview__text {{text}}
</template>

<script>
import { ref } from 'vue';
import overviewOne from '@/assets/img/overviewOne.jpg';
import overviewTwo from '@/assets/img/overviewTwo.png';
import overviewThree from '@/assets/img/overviewThree.png';
import overviewFour from '@/assets/img/overviewFour.png';

export default {
  name: 'BbOverview',
  setup() {
    const description = ref(
      'Seit über vier Jahrzehnten zeichnet sich unser Unternehmen in außergewöhnlichen Bauprojekten aus und folgt einer Philosophie der klassischen Werte: Qualität, Zuverlässigkeit und Sicherheit.'
    );
    const text = ref(
      'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '
    );

    return {
      description,
      text,
      overviewOne,
      overviewTwo,
      overviewThree,
      overviewFour,
    };
  },
};
</script>

<style src="./_bbOverview.scss" lang="scss"></style>
