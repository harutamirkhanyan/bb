<template lang="pug">
#main
  BbHeader
  router-view
  BbFooter 
</template>

<script>
import BbHomePage from './views/HomePage/HomePage.vue';
import BbHeader from '@/components/BbHeader/BbHeader.vue';
import BbFooter from '@/components/BbFooter/BbFooter.vue';

export default {
  name: 'App',
  components: { BbHomePage, BbHeader, BbFooter },
};
</script>

<style></style>
