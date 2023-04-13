<template lang="pug">
.perfomance.containerFluid
  h5.perfomance__title(v-if="title") {{title}}
  p.perfomance__description(v-if="description") {{description}}
  p.perfomance__text(v-if="text") {{text}}
  .perfomance__content
    .perfomance__leftBlock
      .perfomance__imgWrapper.perfomance__imgWrapper--mini
        img.perfomance__img(:src='leftImgPerfomance' alt='alt' loading='lazy')
      .perfomance__contentTextsBlok
        p.perfomance__contentTexts(v-for="item in contentText" :key="item.id") 
          h6 {{item.contentTitle}} 
          span {{item.contentText}}
    .perfomance__rightBlok
      .perfomance__imgWrapper
        img.perfomance__img(:src='rightImgPerfomance' alt='alt' loading='lazy')
 
</template>

<script>
// import { ref } from 'vue';

export default {
  name: 'BbPerfomance',
  props: {
    // items: {
    //   type: Array,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    leftImgPerfomance: {
      type: String,
      required: true,
    },
    rightImgPerfomance: {
      type: String,
      required: true,
    },
    contentText: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  setup() {
    return {};
  },
};
</script>

<style src="./_bbPerfomance.scss" lang="scss"></style>
