<template lang="pug">
.header.container
  .header__Wrapper
    .header__top
      .header__info
        a.header__contact(href='tel:+49 89 64 19 280') 
          img.header__contactImg(:src='bbPhone' loading='lazy' alt='bbPhone')
          span.header__contactText +49 89 64 19 280
        a.header__contact.header__contact--displayNone(href='mailto:info@bhb-bayern.de')
          img.header__contactImg(:src='sendMail' loading='lazy' alt='sendMail')
          span.header__contactText  info@bhb-bayern.de
      .header__logoWrapper
        img.header__logo(:src='logo' loading='lazy' alt='logo')
      .header__socialMedia
        a.header__logoWrapper.header__logoWrapper--mini(href='info@bhb-bayern.de')
          img.header__logo(:src='facebook' loading='lazy' alt='facebook')
        a.header__logoWrapper.header__logoWrapper--mini(href='info@bhb-bayern.de') 
          img.header__logo(:src='instagram' loading='lazy' alt='instagram')
      a.header__burger(@click.prevent="openSidebar")
        img.header__logo(:src='burger' loading='lazy' alt='burgerLogo')
    ul.header__menu
      li.header__item(v-for="item in navItem" :key="item.id")
        a.header__link(href='javascript:void(0)') {{item.text}}
    BbSidebar.header__sidebar.sidebar
      .sidebar__info
        a.sidebar__contact(href='tel:+49 89 64 19 280') 
          img.sidebar__contactImg(:src='bbPhone' loading='lazy' alt='bbPhone')
          span.sidebar__contactText +49 89 64 19 280
        a.sidebar__contact(href='mailto:info@bhb-bayern.de')
          img.sidebar__contactImg(:src='sendMail' loading='lazy' alt='sendMail')
          span.sidebar__contactText  info@bhb-bayern.de
      ul.sidebar__menu
        li.sidebar__item(v-for="item in navItem" :key="item.id")
          a.sidebar__link(href='javascript:void(0)') {{item.text}}
        li.sidebar__item
          .sidebar__socialMedia
            a.sidebar__logoWrapper.sidebar__logoWrapper--mini(href='info@bhb-bayern.de')
              img.sidebar__logo(:src='facebook' loading='lazy' alt='facebook')
            a.sidebar__logoWrapper.sidebar__logoWrapper--mini(href='info@bhb-bayern.de') 
              img.sidebar__logo(:src='instagram' loading='lazy' alt='instagram')
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import logo from '@/assets/svgs/bbLogo.svg';
import facebook from '@/assets/svgs/bbfacebook.svg';
import instagram from '@/assets/svgs/bbinstagram.svg';
import burger from '@/assets/svgs/burger.svg';
import bbPhone from '@/assets/svgs/bbPhone.svg';
import sendMail from '@/assets/svgs/sendMail.svg';
import BbSidebar from '@/components/BbSidebar/BbSidebar.vue';
export default {
  name: 'BbHeader',
  components: {BbSidebar},
  setup() {
    const navItem = ref([
      { id: 1, text: 'Projekte' },
      { id: 2, text: 'Maison' },
      { id: 3, text: 'Presse' },
      { id: 4, text: 'Magazin' },
      { id: 5, text: 'Kontakt' },
    ]);
    const store = useStore();
    return {
      logo,
      navItem,
      facebook,
      instagram,
      burger,
      bbPhone,
      sendMail,
      openSidebar: () => store.commit('openSidebar'),
    };
  },
};
</script>

<style src="./_bbHeader.scss" lang="scss"></style>
