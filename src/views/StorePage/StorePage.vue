<template lang="pug">
.store
  .store__wrapper.container
    h2.store__title MAGAZIN
    p.store__text {{text}}
    span.store__verticalText {{verticalText}}

    
</template>

<script>
import { ref } from 'vue';
import storeOne from '@/assets/img/storeOne.jpg';
import storeTwo from '@/assets/img/storeTwo.jpg';
import storeThree from '@/assets/img/storeThree.jpg';
import storeFour from '@/assets/img/storeFour.jpg';
import storeFive from '@/assets/img/storeFive.jpg';

export default {
  name: 'BbStore',
  components: {},
  setup() {
    const verticalText = ref('LOREMIPSUMDOLORSITAMET/CONSECTEERADIPISCINGELIT');
    const text = ref(
      'Wir denken das Wohnen und Bauen der Zukunft voraus und präsentieren Ihnen Zeitgeist und Visionen, Lifestyle und Design, Architektur und Baukultur. Gesammelt an dieser Stelle. Wie gewohnt: dem Trend auf der Spur, gut recherchiert und knackig präsentiert.'
    );
    const storeItems = ref([
      {
        id: 1,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: storeTwo,
      },
      {
        id: 2,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: storeOne,
      },
      {
        id: 3,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: storeThree,
      },
      {
        id: 4,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: storeFour,
      },
      {
        id: 5,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: storeFive,
      },
    ]);
    return {
      verticalText,
      text,
      storeItems,
    };
  },
};
</script>

<style src="./_storePage.scss" lang="scss"></style>
