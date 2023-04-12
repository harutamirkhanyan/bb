<template lang="pug">
.storeCard
  .storeCard__imgWrapper
    VMotionWrapper(:animationType='animationType')
      img.storeCard__img(:src='src' alt='alt' loading='lazy')
  .storeCard__descriptionBlock
    .storeCard__textBlock
      h3.storeCard__cardTitle {{title}}
      span.storeCard__cardText {{text}}
    img.storeCard__arrow(:src='arrowStore' loading='lazy' alt='arrow')
</template>

<script>
import arrowStore from '@/assets/svgs/arrowStore.svg';
import VMotionWrapper from '@/components/VMotionWrapper/VMotionWrapper.vue';

export default {
  name: 'StoreCard',
    components: { VMotionWrapper },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    animationType: {
      type: String,
      required: false,
      default: '',
    },
  },

  setup() {
    return {
      arrowStore,
    };
  },
};
</script>

<style src="./_storeCard.scss" lang="scss"></style>
