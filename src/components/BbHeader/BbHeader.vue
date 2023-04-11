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
      router-link.header__logoWrapper(to='/')
        img.header__logo(:src='logo' loading='lazy' alt='logo')
      .header__socialMedia
        a.header__logoWrapper.header__logoWrapper--mini(href='info@bhb-bayern.de')
          img.header__logo(:src='facebook' loading='lazy' alt='facebook')
        a.header__logoWrapper.header__logoWrapper--mini(href='info@bhb-bayern.de') 
          img.header__logo(:src='instagram' loading='lazy' alt='instagram')
      //- a.header__burger(href="javascript:void(0)" @click.prevent="openSidebar")
      //-   img.header__logo(:src='burger' loading='lazy' alt='burgerLogo')
      BurgerMenu.header__burger
    ul.header__menu
      li.header__item(v-for="item in navItem" :key="item.id")
        router-link.header__link(:to='item.route') {{item.text}}
    BbSidebar.header__sidebar.sidebarHeader
      template.sidebarHeader__info
        a.sidebarHeader__contact(href='tel:+49 89 64 19 280' @click="closeSidebar") 
          img.sidebarHeader__contactImg(:src='bbPhone' loading='lazy' alt='bbPhone')
          span.sidebarHeader__contactText +49 89 64 19 280
        a.sidebarHeader__contact(href='mailto:info@bhb-bayern.de' @click="closeSidebar")
          img.sidebarHeader__contactImg(:src='sendMail' loading='lazy' alt='sendMail')
          span.sidebarHeader__contactText  info@bhb-bayern.de
      ul.sidebarHeader__menu
        li.sidebarHeader__item(v-for="item in navItem" :key="item.id")
          router-link.header__link(:to='item.route'  @click.prevent="closeSidebar") {{item.text}}
        li.sidebarHeader__item
          .sidebarHeader__socialMedia
            a.sidebarHeader__logoWrapper.sidebarHeader__logoWrapper--mini(href='info@bhb-bayern.de'  @click.prevent="closeSidebar")
              img.sidebarHeader__logo(:src='facebook' loading='lazy' alt='facebook')
            a.sidebarHeader__logoWrapper.sidebarHeader__logoWrapper--mini(href='info@bhb-bayern.de'  @click.prevent="closeSidebar") 
              img.sidebarHeader__logo(:src='instagram' loading='lazy' alt='instagram')
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import BbSidebar from '@/components/BbSidebar/BbSidebar.vue';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu.vue';
import logo from '@/assets/svgs/bbLogo.svg';
import facebook from '@/assets/svgs/bbfacebook.svg';
import instagram from '@/assets/svgs/bbinstagram.svg';
import burger from '@/assets/svgs/burger.svg';
import bbPhone from '@/assets/svgs/bbPhone.svg';
import sendMail from '@/assets/svgs/sendMail.svg';
export default {
  name: 'BbHeader',
  components: { BbSidebar, BurgerMenu },
  setup() {
    const navItem = ref([
      { id: 1, text: 'Projekte', route: 'projects' },
      { id: 2, text: 'Maison', route: 'maison' },
      { id: 3, text: 'Presse', route: 'presse' },
      { id: 4, text: 'Magazin', route: 'store' },
      { id: 5, text: 'Kontakt', route: 'contacts' },
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
      closeSidebar: () => store.commit('closeSidebar'),
    };
  },
};
</script>

<style src="./_bbHeader.scss" lang="scss"></style>
