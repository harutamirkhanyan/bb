<template lang="pug">
.store
  .store__wrapper
    .store__content.container
      h2.store__title MAGAZIN
      p.store__text {{text}}
      span.store__verticalText {{verticalText}}
    .store__cards.container
      .store__container.store__container--two
          .store__card.store__card--four(v-if="storeItems[0]")
            StoreCard(v-bind="storeItems[0]" animationDirection="right")
          .store__card.store__card--five(v-if="storeItems[1]")
            StoreCard(v-bind="storeItems[1]" animationDirection="left")
      .store__container
        .store__card.store__card--one(v-if="storeItems[2]")
          StoreCard(v-bind="storeItems[2]" animationDirection="left")
        .store__cardWrapper
          .store__card.store__card--two(v-if="storeItems[3]")
            StoreCard(v-bind="storeItems[3]" animationDirection="right")
          .store__card.store__card--three(v-if="storeItems[4]")
            StoreCard(v-bind="storeItems[4]" animationDirection="right")
      .store__container.store__container--reverse
        .store__card.store__card--one(v-if="storeItems[5]")
          StoreCard(v-bind="storeItems[5]" animationDirection="left")
        .store__cardWrapper
          .store__card.store__card--two(v-if="storeItems[6]")
            StoreCard(v-bind="storeItems[6]" animationDirection="right")
          .store__card.store__card--three(v-if="storeItems[7]")
            StoreCard(v-bind="storeItems[7]" animationDirection="right")
  .store__recommendedContent.container
    RecommendedContent(:description='recomendatetDescription' :title='recomendatetTitle' :items='recomendatetItems')

</template>

<script>
import { ref } from 'vue';
import StoreCard from '@/components/StoreCard/StoreCard.vue';
import RecommendedContent from '@/components/RecommendedContent/RecommendedContent.vue';
import magazineOne from '@/assets/img/magazineOne.jpg';
import magazineTwo from '@/assets/img/magazineTwo.jpg';
import magazineThree from '@/assets/img/magazineThree.jpg';
import magazineFour from '@/assets/img/magazineFour.jpg';
import magazineFive from '@/assets/img/magazineFive.jpg';
import magazineSix from '@/assets/img/magazineSix.jpg';
import magazineSeven from '@/assets/img/magazineSeven.png';
import recommendedOne from '@/assets/img/recommendedOne.jpg';
import recommendedTwo from '@/assets/img/recommendedTwo.jpg';
import recommendedThree from '@/assets/img/recommendedThree.jpg';

export default {
  name: 'BbStore',
  components: { StoreCard, RecommendedContent },
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
        src: magazineTwo,
      },
      {
        id: 2,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineOne,
      },
      {
        id: 3,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineThree,
      },
      {
        id: 4,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineFour,
      },
      {
        id: 5,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineFive,
      },
      {
        id: 6,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineSix,
      },
      {
        id: 7,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineSeven,
      },
      {
        id: 8,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        src: magazineOne,
      },
    ]);

    const recomendatetItems = ref([
      {
        id: 1,
        title: 'Zukunftsweisendes Leben in Garching',
        name: 'FVTVRIA',
        src: recommendedOne,
        alt: 'FVTVRIA',
        more: 'MEHR ERFAHREN',
      },
      {
        id: 2,
        title: 'Bauwerk in der B(l)ooming City Grafi ng',
        name: 'S’PLATZL',
        src: recommendedTwo,
        alt: 'S’PLATZL',
        more: 'MEHR ERFAHREN',
      },
      {
        id: 2,
        title: 'Urbane Agrikultur zum Wohnen in Freising',
        name: 'BEE FREE',
        src: recommendedThree,
        alt: 'BEEFREE',
        more: 'MEHR ERFAHREN',
      },
    ]);

    const recomendatetDescription = ref(
      'Als Architekt, Bauträger und Projektentwickler hauchen wir besonderen Standorten frischen Wind ein. Erfahren Sie mir über unsere Arbeit'
    );
    const recomendatetTitle = ref('Das könnte Sie auch interssieren');
    return {
      verticalText,
      text,
      storeItems,
      magazineSix,
      magazineSeven,
      recomendatetDescription,
      recomendatetTitle,
      recomendatetItems,
      recommendedOne,
      recommendedTwo,
      recommendedThree,
    };
  },
};
</script>

<style src="./_storePage.scss" lang="scss"></style>
