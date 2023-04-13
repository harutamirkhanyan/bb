<template lang="pug">
.aboutUs.containerFluid
  .aboutUs__wrapper
    BbNavigation(:title='navigetionTitle' :items='navigetionItems')
    .aboutUs__content
      .aboutUs__content
        AboutUsHeader
    BbOverview

</template>

<script>
import { ref } from 'vue';
import BbNavigation from '@/components/BbNavigation/BbNavigation.vue';
import AboutUsHeader from '@/components/AboutUsHeader/AboutUsHeader.vue';
import BbOverview from '@/components/BbOverview/BbOverview.vue';

export default {
  name: 'AboutUsPage',
  components: { BbNavigation, AboutUsHeader, BbOverview },
  setup() {
    const navigetionTitle = ref('Bauen mit Herzblut – seit 1976');
    const navigetionItems = ref([
      { id: 1, item: 'UNTERNEHMEN' },
      { id: 2, item: 'HALTUNG' },
      { id: 3, item: 'UMWELT' },
      { id: 4, item: 'FOUNDER' },
      { id: 5, item: 'EINKAUFSPROFIL' },
      { id: 6, item: 'PARTNER' },
      { id: 7, item: 'JOBS' },
    ]);

    return { navigetionItems, navigetionTitle };
  },
};
</script>

<style src="./_aboutUsPage.scss" lang="scss"></style>
