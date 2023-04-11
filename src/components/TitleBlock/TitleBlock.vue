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
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style src="./_titleBlock.scss" lang="scss"></style>
