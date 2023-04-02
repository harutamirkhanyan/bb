<template lang="pug">
.header.container( v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 0 } }"
    :delay="2000")
  .header__Wrapper
    .header__top
      .header__info
        a.header__contact(href='tel:+49 89 64 19 280') +49 89 64 19 280
        a.header__contact(href='mailto:info@bhb-bayern.de') info@bhb-bayern.de
      .header__logoWrapper
        img.header__logo(:src='logo' loading='lazy' alt='logo')
      .header__socialMedia
        a.header__logoWrapper.header__logoWrapper--mini(href='info@bhb-bayern.de')
          img.header__logo(:src='facebook' loading='lazy' alt='facebook')
        a.header__logoWrapper.header__logoWrapper--mini(href='info@bhb-bayern.de') 
          img.header__logo(:src='instagram' loading='lazy' alt='instagram')
    ul.header__menu
      li.header__item(v-for="item in navItem" :key="item.id")
        a.header__link(href='javascript:void(0)') {{item.text}}
    a.header__burger(href='javascript:void(0)')
      img.header__logo(:src='burger' loading='lazy' alt='burgerLogo')
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/svgs/bbLogo.svg';
import facebook from '@/assets/svgs/bbfacebook.svg';
import instagram from '@/assets/svgs/bbinstagram.svg';
import burger from '@/assets/svgs/burger.svg';

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
      facebook,
      instagram,
      burger
    };
  },
};
</script>

<style src="./_bbHeader.scss" lang="scss"></style>
