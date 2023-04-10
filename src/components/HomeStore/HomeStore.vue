<template lang="pug">
.homeStore.container
  TitleBlock(:title='projectTitle' :text='projectText' :linkText='linkText')
  .homeStore__wrapper
    .homeStore__card.homeStore__card--one
      StoreCard(v-bind="storeItems[0]" animationDirection="left")
    .homeStore__cardWrapper
      .homeStore__card.homeStore__card--two
        StoreCard(v-bind="storeItems[1]" animationDirection="right")
      .homeStore__card.homeStore__card--three
        StoreCard(v-bind="storeItems[2]" animationDirection="right")
  .homeStore__wrapper.homeStore__wrapper--two
    .homeStore__card.homeStore__card--four
      StoreCard(v-bind="storeItems[3]" animationDirection="right")
    .homeStore__card.homeStore__card--five
      StoreCard(v-bind="storeItems[4]" animationDirection="left")
</template>

<script>
import { ref } from 'vue';
import TitleBlock from '@/components/TitleBlock/TitleBlock.vue';
import StoreCard from '@/components/StoreCard/StoreCard.vue';
import storeOne from '@/assets/img/storeOne.jpg';
import storeTwo from '@/assets/img/storeTwo.jpg';
import storeThree from '@/assets/img/storeThree.jpg';
import storeFour from '@/assets/img/storeFour.jpg';
import storeFive from '@/assets/img/storeFive.jpg';
export default {
  name: 'HomeMagzain',
  components: { TitleBlock, StoreCard },
  props: {
    cardInfo: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const linkText = ref('ZUR ÜBERSICHT');
    const projectText = ref(
      'Wir denken das Wohnen und Bauen der Zukunft voraus und präsentieren Ihnen Zeitgeist und Visionen, Lifestyle und Design, Architektur und Baukultur. Gesammelt an dieser Stelle.'
    );
    const projectTitle = ref('Magazin');
    const title = ref('Aenean commodo ligula eget dolor.');
    const text =
      'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.';
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
      storeItems,
      storeOne,
      storeTwo,
      storeThree,
      storeFour,
      storeFive,
      title,
      text,
      projectText,
      projectTitle,
      linkText,
    };
  },
};
</script>

<style src="./_homeStore.scss" lang="scss"></style>
