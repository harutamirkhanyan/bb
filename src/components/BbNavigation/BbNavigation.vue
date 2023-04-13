<template lang="pug">
nav.navigation.containerFluid
  h4.navigation__title {{title}}
  ul.navigation__menu
    li.navigation__item(v-for="item in items" :key="item.id")
      a.navigation__link(href='javascript:void(0)') {{item.item}}
  
</template>

<script>
export default {
  name: 'BbNavigation',
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="./_bbNavigation.scss" lang="scss"></style>
