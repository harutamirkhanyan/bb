<template lang="pug">
.homeStore.container
  TitleBlock(:title='projectTitle' :text='projectText' :linkText='linkText')
  .homeStore__wrapper
    .homeStore__card.homeStore__card--one(v-if="storeItems[0]")
      StoreCard(v-bind="storeItems[0]" animationType="visibleLeft")
    .homeStore__cardWrapper
      .homeStore__card.homeStore__card--two(v-if="storeItems[1]")
        StoreCard(v-bind="storeItems[1]" animationType="visibleRight")
      .homeStore__card.homeStore__card--three(v-if="storeItems[2]")
        StoreCard(v-bind="storeItems[2]" animationType="visibleRight")
  .homeStore__wrapper.homeStore__wrapper--two
    .homeStore__card.homeStore__card--four(v-if="storeItems[3]")
      StoreCard(v-bind="storeItems[3]" animationType="visibleRight")
    .homeStore__card.homeStore__card--five(v-if="storeItems[4]")
      StoreCard(v-bind="storeItems[4]" animationType="visibleLeft")
  //- .homeStore__card(v-for="(card, index) in storeItems.slice(5)" :key="`${index}`" :class="`homeStore__card--extra`")
  //-   StoreCard(v-if='(index%2===0)' v-bind="card" animationType="visibleRight" :class="`homeStore__cardItem homeStore__cardItem--right`")
  //-   StoreCard(v-else v-bind="card" animationType="visibleLeft" :class="`homeStore__cardItem homeStore__cardItem--left`")
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

    // storeItems.value[0].animationType = 'visibleLeft';
    // storeItems.value[1].animationType = 'visibleRight';
    // storeItems.value[2].animationType = 'visibleRight';
    // storeItems.value[3].animationType = 'visibleRight';
    // storeItems.value[4].animationType = 'visibleLeft';
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
