<template lang="pug">
.storeCard
  .storeCard__imgWrapper(v-if="animationDirection == 'left'")
    img.storeCard__img(
      :src='src' alt='alt' loading='lazy'  
      v-motion-slide-visible-right
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
  .storeCard__imgWrapper(v-else-if="animationDirection == 'right'")
    img.storeCard__img(
      :src='src' alt='alt' loading='lazy'  
       v-motion-slide-visible-left
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
  .storeCard__descriptionBlock
    .storeCard__textBlock
      h3.storeCard__cardTitle {{title}}
      span.storeCard__cardText {{text}}
    img.storeCard__arrow(:src='arrowStore' loading='lazy' alt='arrow')
</template>

<script>
import arrowStore from '@/assets/svgs/arrowStore.svg';

export default {
  name: 'StoreCard',
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
    animationDirection: {
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
