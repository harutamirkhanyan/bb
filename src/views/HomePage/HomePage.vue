<template lang="pug">
.homePage
  HomeBanner
  HomeVision
  .homePage__projectsBg
    .homePage__wrapper
      .homePage__projects.container
        TitleBlock(:title='title' :text='projectText' :linkText='linkText')
        BbProjects(:projects='projects')
  HomeStore(:cardInfo='storeItems')
  HomeNewsLetter 
</template>

<script>
import { ref } from 'vue';
import HomeBanner from '@/components/HomeBanner/HomeBanner.vue';
import HomeVision from '@/components/HomeVision/HomeVision.vue';
import BbProjects from '@/components/BbProjects/BbProjects.vue';
import TitleBlock from '@/components/TitleBlock/TitleBlock.vue';
import HomeStore from '@/components/HomeStore/HomeStore.vue';
import HomeNewsLetter from '@/components/HomeNewsLetter/HomeNewsLetter.vue';
import projectOne from '@/assets/img/projectOne.jpg';
import projectTwo from '@/assets/img/projectTwo.jpg';
import projectThree from '@/assets/img/projectThree.jpg';
import storeOne from '@/assets/img/storeOne.jpg';
import storeTwo from '@/assets/img/storeTwo.jpg';
import storeThree from '@/assets/img/storeThree.jpg';
import storeFour from '@/assets/img/storeFour.jpg';
import storeFive from '@/assets/img/storeFive.jpg';


export default {
  name: 'BbHomePage',
  components: {  HomeBanner, HomeVision, BbProjects, TitleBlock, HomeStore, HomeNewsLetter },
  setup() {
    const projects = ref([
      {
        id: 1,
        img: projectOne,
        geo: 'MÜNCHEN-HAAR',
        title: 'TAUSENDSCHÖN',
        more: 'MEHR ERFAHREN',
      },
      {
        id: 2,
        img: projectTwo,
        geo: 'MÜNCHEN-GRAFING',
        title: 'S’PLATZL',
        more: 'MEHR ERFAHREN',
      },
      {
        id: 3,
        img: projectThree,
        geo: 'MÜNCHEN-HAAR',
        title: 'MÜNCHEN-GARCHING',
        more: 'MEHR ERFAHREN',
      },
    ]);
    const projectText = ref(
      'Respekt für das Umfeld und die individuelle Entfaltung der Bewohner prägen unsere Projekte seit über 45 Jahren. Hier eine kuratierte Auswahl.'
    );
    const title = ref('Projecte');
    const linkText = ref('ZUR ÜBERSICHT');
    const storeItems = ref([
      {
        id: 1,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: storeOne
      },
      {
        id: 2,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: storeTwo
      },
      {
        id: 3,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: storeThree
      },
      {
        id: 4,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: storeFour
      },
      {
        id: 5,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: storeFive
      },
   
    ]);
    
    return {
      projects,
      projectOne,
      projectTwo,
      projectThree,
      projectText,
      title,
      linkText,
      storeItems,
      storeOne,
      storeTwo,
      storeThree,
      storeFour,
      storeFive,
    };
  },
};
</script>

<style src="./_homePage.scss" lang="scss"></style>
