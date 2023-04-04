<template lang="pug">
.projectsPage
  h2.projectsPage__title Baukultur seit 1976
  p.projectsPage__text Unsere Projecte
  span.projectsPage__verticalText {{verticalText}}
  .projectsPage__wrapper
    BbProjects(:projects='projects')
    
</template>

<script>
import { ref } from 'vue';
import BbProjects from '@/components/BbProjects/BbProjects.vue';
import projectOne from '@/assets/img/projectOne.jpg';
import splatzl from '@/assets/img/projectSplatzl.jpg';
import kleinod from '@/assets/img/projectKleinod.jpg';
import fvtvuria from '@/assets/img/projectFvtvuria.jpg';
import blattwerk from '@/assets/img/projectBlattwerk.jpg';
import beefree from '@/assets/img/projectBeefree.jpg';
export default {
  components: { BbProjects },
  setup() {
    const verticalText = ref('LOREMIPSUMDOLORSITAMET/CONSECTEERADIPISCINGELIT');
    const projects = ref([
      {
        id: 1,
        img: projectOne,
        geo: 'MÜNCHEN-HAAR',
        title: 'TAUSENDSCHÖN',
        more: 'MEHR ERFAHREN',
        description:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
      {
        id: 2,
        img: splatzl,
        geo: 'MÜNCHEN-GRAFING',
        title: 'S’PLATZL',
        more: 'MEHR ERFAHREN',
        description:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
      {
        id: 3,
        img: fvtvuria,
        geo: 'MÜNCHEN-GARCHING',
        title: 'FVTVURIA',
        more: 'MEHR ERFAHREN',
        description:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
      {
        id: 4,
        img: kleinod,
        geo: 'MÜNCHEN-ALT-RIEM',
        title: 'DAS KLEINOD',
        more: 'MEHR ERFAHREN',
        description:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
      {
        id: 5,
        img: blattwerk,
        geo: 'MÜNCHEN-ECHING',
        title: 'BLATTWERK',
        more: 'MEHR ERFAHREN',
        description:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
      {
        id: 6,
        img: beefree,
        geo: 'FREISING',
        title: 'BEE FREE',
        more: 'MEHR ERFAHREN',
        description:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ]);

    return {
      verticalText,
      projects,
      splatzl,
      kleinod,
      fvtvuria,
      blattwerk,
      beefree,
    };
  },
};
</script>

<style src="./_projectsPage.scss" lang="scss"></style>
