<template lang="pug">
nav.navbar.container
  ul.navbar__menu
    li.navbar__item(v-for="item in navItem" :key="item.id")
      a.navbar__link(href='javascript:void(0)') {{item.text}}
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const navItem = ref([
      { id: 1, text: 'Projekte' },
      { id: 2, text: 'Maison' },
      { id: 3, text: 'Presse' },
      { id: 4, text: 'Magazin' },
      { id: 5, text: 'Kontakt' },
    ]);

    return {
      navItem,
    };
  },
};
</script>

<style src="./_bbNavbar.scss" lang="scss"></style>
