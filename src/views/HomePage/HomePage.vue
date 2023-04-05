<template lang="pug">
.homePage
  HomeBanner
  HomeVision
  .homePage__projectsBg
    .homePage__wrapper
      .homePage__projects.container
        TitleBlock(:title='title' :text='projectText' :linkText='linkText')
        BbProjects(:projects='projects')
  HomeMagazine(:cardInfo='magazineItems')
  HomeNewsLetter 
</template>

<script>
import { ref } from 'vue';
import HomeBanner from '@/components/HomeBanner/HomeBanner.vue';
import HomeVision from '@/components/HomeVision/HomeVision.vue';
import BbProjects from '@/components/BbProjects/BbProjects.vue';
import TitleBlock from '@/components/TitleBlock/TitleBlock.vue';
import HomeMagazine from '@/components/HomeMagazine/HomeMagazine.vue';
import HomeNewsLetter from '@/components/HomeNewsLetter/HomeNewsLetter.vue';
import projectOne from '@/assets/img/projectOne.jpg';
import projectTwo from '@/assets/img/projectTwo.jpg';
import projectThree from '@/assets/img/projectThree.jpg';
import magazineOne from '@/assets/img/magazineOne.jpg';
import magazineTwo from '@/assets/img/magazineTwo.jpg';
import magazineThree from '@/assets/img/magazineThree.jpg';
import magazineFour from '@/assets/img/magazineFour.jpg';
import magazineFive from '@/assets/img/magazineFive.jpg';


export default {
  name: 'BbHomePage',
  components: {  HomeBanner, HomeVision, BbProjects, TitleBlock, HomeMagazine, HomeNewsLetter },
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
    const magazineItems = ref([
      {
        id: 1,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineOne
      },
      {
        id: 2,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineTwo
      },
      {
        id: 3,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineThree
      },
      {
        id: 4,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineFour
      },
      {
        id: 5,
        title: 'Aenean commodo ligula eget dolor.',
        text: 'Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: magazineFive
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
      magazineItems,
      magazineOne,
      magazineTwo,
      magazineThree,
      magazineFour,
      magazineFive,
    };
  },
};
</script>

<style src="./_homePage.scss" lang="scss"></style>
