<template lang="pug">
.maison.containerFluid
  .maison__wrapper
    BbNavigation(:title='navigetionTitle' :items='navigetionItems')
    .maison__content
      .maison__content.container hi

</template>

<script>
import { ref } from 'vue';
import BbNavigation from '@/components/BbNavigation/BbNavigation.vue';

export default {
  name: 'MaisonPage',
  components: { BbNavigation },
  setup() {
    const navigetionTitle= ref('Bauen mit Herzblut – seit 1976');
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

<style src="./_maisonPage.scss" lang="scss"></style>
