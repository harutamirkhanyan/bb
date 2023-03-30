<template lang="pug">
.homeMagazine.container
  ul.homeMagazine__menu
    li.homeMagazine__items
      .homeMagazine__left
      .homeMagazine__right
    li.homeMagazine__items
      .homeMagazine__left
      .homeMagazine__right
</template>

<script>
export default {
  name: 'TitleBlock',

  props: {
    title: {
      tye: String,
      required: true,
    },
    text: {
      tye: String,
      required: true,
    },
    linkText: {
      tye: String,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style src="./_titleBlock.scss" lang="scss"></style>
