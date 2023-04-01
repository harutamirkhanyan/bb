<template lang="pug">
footer.footer
  .footer__wrapper.container
    h5.footer__title Kontakt
    .footer__content
      .footer__contacts(v-html="contact")
      ul.footer__menu
        li.footer__item(v-for="item in menuItesm" :key="item.id")
          a.footer__navLink {{item.text}}
      .footer__social
        .footer__links
          a.footer__linksItem() Facebook
          a.footer__linksItem() Instagram
        .footer__links
          a.footer__linksItem() Newsletter
          a.footer__linksItem() Karriere
    .footer__copyright
      .footer__copyrightItem © 2022 BHB Unternehmensgruppe 
      .footer__copyrightItem Datenschutz
      .footer__copyrightItem Impressum
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BbFooter',
  setup() {
    const contact = ref(
      'BHB Unternehmensgruppe<br>Nördliche Münchner Straße 9c <br>82031 Grünwald <br> +49 89 64 19 280 <br> info@bhb-bayern.de'
    );
    const menuItesm = ref([
      {
        id: 1,
        text: 'Projekte',
        url: '',
      },
      {
        id: 1,
        text: 'Maison',
        url: '',
      },
      {
        id: 1,
        text: 'Presse',
        url: '',
      },
      {
        id: 1,
        text: 'Magazine',
        url: '',
      },
      {
        id: 1,
        text: 'Kontakt',
        url: '',
      },
    ]);
    return {
      contact,
      menuItesm,
    };
  },
};
</script>

<style src="./_bbFooter.scss" lang="scss"></style>
