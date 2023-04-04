<template lang="pug">
.sidebar(v-if="sidebar")
  span.sidebar__close(@click="closeSidebar") &times;
  .sidebar__content
    slot
  //- .sidebar__content
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
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import bbPhone from '@/assets/svgs/bbPhone.svg';
import sendMail from '@/assets/svgs/sendMail.svg';
import facebook from '@/assets/svgs/bbfacebook.svg';
import instagram from '@/assets/svgs/bbinstagram.svg';
export default {
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);
    return {
      sidebar,
      bbPhone,
      sendMail,
      facebook,
      instagram,
      closeSidebar: () => store.commit('closeSidebar'),
    };
  },
};
</script>

<style src="./_bbSidebar.scss" lang="scss"></style>
