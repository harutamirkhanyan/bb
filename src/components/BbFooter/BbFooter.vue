<template lang="pug">
footer.footer
  .footer__container.container
    .footer__animation(v-motion-slide-visible-bottom
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="50")
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
        .footer__copyrightItem © 2023 BHB Unternehmensgruppe 
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
        route: 'projects',
      },
      {
        id: 2,
        text: 'Maison',
        route: 'maison',
      },
      {
        id: 3,
        text: 'Presse',
        route: 'presse',
      },
      {
        id: 4,
        text: 'Store',
        route: 'store',
      },
      {
        id: 5,
        text: 'Kontakt',
        route: 'contacts',
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
