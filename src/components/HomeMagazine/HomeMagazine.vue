<template lang="pug">
.homeMagazine.container
  TitleBlock(title='title' text='projectText' linkText='linkText')
  .homeMagazine__wrapper
    .homeMagazine__card.homeMagazine__card--one
      .homeMagazine__imgWrapper(  v-motion-slide-visible-left
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 5 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
        img.homeMagazine__img(:src='magazineTwo' alt='alt' loading='lazy')
      .homeMagazine__descriptionBlock
        .homeMagazine__textBlock
          h3.homeMagazine__cardTitle {{title}}
          span.homeMagazine__cardText {{text}}
        img.homeMagazine__arrow(src='@/assets/svgs/arrowMagazine.svg' loading='lazy' alt='arrow')
    .homeMagazine__cardWrapper
      .homeMagazine__card.homeMagazine__card--two
        .homeMagazine__imgWrapperr(  v-motion-slide-visible-right
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
          img.homeMagazine__img(:src='magazineOne' alt='alt' loading='lazy')
        .homeMagazine__descriptionBlock
          .homeMagazine__textBlock
            h3.homeMagazine__cardTitle {{title}}
            span.homeMagazine__cardText {{text}}
          img.homeMagazine__arrow(src='@/assets/svgs/arrowMagazine.svg' loading='lazy' alt='arrow')
      .homeMagazine__card.homeMagazine__card--three
        .homeMagazine__imgWrapper(v-motion-slide-visible-right
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
          img.homeMagazine__img(:src='magazineThree' alt='alt' loading='lazy')
        .homeMagazine__descriptionBlock
          .homeMagazine__textBlock
            h3.homeMagazine__cardTitle {{title}}
            span.homeMagazine__cardText {{text}}
          img.homeMagazine__arrow(src='@/assets/svgs/arrowMagazine.svg' loading='lazy' alt='arrow')
  .homeMagazine__wrapper.homeMagazine__wrapper--two
    .homeMagazine__card.homeMagazine__card--four
      .homeMagazine__imgWrapper(  v-motion-slide-visible-right
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
        img.homeMagazine__img(:src='magazineFour' alt='alt' loading='lazy')
      .homeMagazine__descriptionBlock
        .homeMagazine__textBlock
          h3.homeMagazine__cardTitle {{title}}
          span.homeMagazine__cardText {{text}}
        img.homeMagazine__arrow(src='@/assets/svgs/arrowMagazine.svg' loading='lazy' alt='arrow')
    .homeMagazine__card.homeMagazine__card--five
      .homeMagazine__imgWrapper(  v-motion-slide-visible-left
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
        img.homeMagazine__img(:src='magazineFive' alt='alt' loading='lazy')
      .homeMagazine__descriptionBlock
        .homeMagazine__textBlock
          h3.homeMagazine__cardTitle {{title}}
          span.homeMagazine__cardText {{text}}
        img.homeMagazine__arrow(src='@/assets/svgs/arrowMagazine.svg' loading='lazy' alt='arrow')
</template>

<script>
import { ref } from 'vue';
import TitleBlock from '@/components/TitleBlock/TitleBlock.vue';
import magazineOne from '@/assets/img/magazineOne.jpg';
import magazineTwo from '@/assets/img/magazineTwo.jpg';
import magazineThree from '@/assets/img/magazineThree.jpg';
import magazineFour from '@/assets/img/magazineFour.jpg';
import magazineFive from '@/assets/img/magazineFive.jpg';
export default {
  name: 'HomeMagzain',
  components: { TitleBlock },
  props: {
    cardInfo: {
      tye: Array,
      required: true,
    },
  },

  setup() {
    const title = ref('Aenean commodo ligula eget dolor.');
    const text =
      'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.';
    const magazineItems = ref([
      {
        id: 1,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineOne,
      },
      {
        id: 2,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineTwo,
      },
      {
        id: 3,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineThree,
      },
      {
        id: 4,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineFour,
      },
      {
        id: 5,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineFive,
      },
    ]);
    return {
      magazineItems,
      magazineOne,
      magazineTwo,
      magazineThree,
      magazineFour,
      magazineFive,
      title,
      text,
    };
  },
};
</script>

<style src="./_homeMagazine.scss" lang="scss"></style>
