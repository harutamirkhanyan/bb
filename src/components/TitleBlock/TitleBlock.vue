<template lang="pug">
.titleBlock
  h3.titleBlock__title  {{title}}
  .titleBlock__description
    span.titleBlock__descText {{text}}
    a.titleBlock__descUrl() {{linkText}} &rarr;
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
