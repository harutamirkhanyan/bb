<template lang="pug">
.header.container( v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 0 } }"
    :delay="2000")
  .header__Wrapper
    .header__top
      .header__info
        span.header__contact +49 89 64 19 280
        a.header__contact info@bhb-bayern.de
      .header__logo
        img.header__img(:src='logo' loading='lazy' alt='logo')
      .header__socialMedia
        a.header__contact() Facebook
        a.header__contact() Instagram
    ul.header__menu
      li.header__item(v-for="item in navItem" :key="item.id")
        a.header__link(href='javascript:void(0)') {{item.text}}
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/svgs/bbLogo.svg';
export default {
  name: 'BbHeader',
  setup() {
    const navItem = ref([
      { id: 1, text: 'Projekte' },
      { id: 2, text: 'Maison' },
      { id: 3, text: 'Presse' },
      { id: 4, text: 'Magazin' },
      { id: 5, text: 'Kontakt' },
    ]);
    return {
      logo,
      navItem,
    };
  },
};
</script>

<style src="./_bbHeader.scss" lang="scss"></style>
