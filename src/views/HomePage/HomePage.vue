<template lang="pug">
.homePage
  BbHeader
  HomeBanner
  HomeVision
  .homePage__projectsBg
    .homePage__wrapper
      .homePage__projects.container
        TitleBlock(:title='title' :text='projectText' :linkText='linkText')
        BbProjects(:projects='projects')
  TitleBlock(:title='title' :text='projectText' :linkText='linkText')

</template>

<script>
import { ref } from 'vue';
import BbHeader from '@/components/BbHeader/BbHeader.vue';
import HomeBanner from '@/components/HomeBanner/HomeBanner.vue';
import HomeVision from '@/components/HomeVision/HomeVision.vue';
import BbProjects from '@/components/BbProjects/BbProjects.vue';
import TitleBlock from '@/components/TitleBlock/TitleBlock.vue';
import projectOne from '@/assets/img/projectOne.jpg';
import projectTwo from '@/assets/img/projectTwo.jpg';
import projectThree from '@/assets/img/projectThree.jpg';

export default {
  name: 'BbHomePage',
  components: { BbHeader, HomeBanner, HomeVision, BbProjects,TitleBlock },
  setup() {
    const projects = ref([
      {
        id: 1,
        img: projectOne,
        name: 'MÜNCHEN-HAAR',
        title: 'TAUSENDSCHÖN',
        url: 'MEHR ERFAHREN',
      },
      {
        id: 2,
        img: projectTwo,
        name: 'MÜNCHEN-GRAFING',
        title: 'S’PLATZL',
        url: 'MEHR ERFAHREN',
      },
      {
        id: 3,
        img: projectThree,
        name: 'MÜNCHEN-HAAR',
        title: 'MÜNCHEN-GARCHING',
        url: 'MEHR ERFAHREN',
      },
    ]);
    const projectText = ref(
      'Respekt für das Umfeld und die individuelle Entfaltung der Bewohner prägen unsere Projekte seit über 45 Jahren. Hier eine kuratierte Auswahl.'
    );
    const title = ref('Projecte');
    const linkText = ref('ZUR ÜBERSICHT');

    return {
      projects,
      projectOne,
      projectTwo,
      projectThree,
      projectText,
      title,
      linkText,
    };
  },
};
</script>

<style src="./_homePage.scss" lang="scss"></style>
