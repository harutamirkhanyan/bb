<template lang="pug">
#main
  router-view 

</template>

<script>
import BbHomePage from './views/HomePage/HomePage.vue';

export default {
  name: 'App',
  components: { BbHomePage },
};
</script>

<style></style>
