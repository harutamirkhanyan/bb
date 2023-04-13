<template lang="pug">
.aboutUsHeader
  .aboutUsHeader__container.container
    .aboutUsHeader__leftBlock
      h2.aboutUsHeader__titleTop {{titleTop}}
      .aboutUsHeader__imgWrapper
        img.aboutUsHeader__img(:src='leftImg' loading='lazy' alt='alt')
    .aboutUsHeader__rightBlock
      .aboutUsHeader__imgWrapperRight
        img.aboutUsHeader__img(:src='leftImg' loading='lazy' alt='alt')
      h2.aboutUsHeader__titleBottom {{titleBottom}}
      p.aboutUsHeader__text {{text}}
  span.aboutUsHeader__verticalText {{verticalText}}
  BbPerfomance(v-bind='items' :contentText="contentTexts")
</template>

<script>
import { ref } from 'vue';
import leftImg from '@/assets/img/homebg.jpg';
import rightImg from '@/assets/img/newsLetter.jpg';
import BbPerfomance from '@/components/BbPerfomance/BbPerfomance.vue';
import rightImgPerfomance from '@/assets/img/aboutUsGirl.jpg';
import leftImgPerfomance from '@/assets/img/aboutUsImg.jpg';

export default {
  name: 'AboutUsHeader',
  components: { BbPerfomance },
  setup() {
    const verticalText = ref('LOREMIPSUMDOLORSITAMET/CONSECTEERADIPISCINGELIT');
    const titleTop = ref('Bauen');
    const titleBottom = ref('im Einklang');
    const text = ref(
      'Seit über vier Jahrzehnten zeichnet sich unser Unternehmen in außergewöhnlichen Bauprojekten aus und folgt einer Philosophie der klassischen Werte: Qualität, Zuverlässigkeit und Sicherheit'
    );
    const items = ref({
      title: 'LEISTUNG',
      description:
        'Wir verstehen uns als Gestalter von Lebensqualität. Aus Besonderheiten und   Kontext des jeweiligen Ortes entstehen ganzheitliche Konzepte für besondere Wohnbauten und  Lebensräume, die den Menschen in ihrer Individualität und Vielfältigkeit eine Umgebung   schaffen.',
      text: 'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      rightImgPerfomance: leftImgPerfomance,
      leftImgPerfomance: rightImgPerfomance,
    });
    const contentTexts = ref([
      {
        id: 1,
        contentTitle: 'Architektur',
        contentText:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 2,
        contentTitle: 'Bauträger',
        contentText:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 3,
        contentTitle: 'Projektentwicklung',
        contentText:
          'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
    ]);
    return {
      verticalText,
      leftImg,
      rightImg,
      titleTop,
      titleBottom,
      text,
      items,
      contentTexts,
      rightImgPerfomance,
      leftImgPerfomance
    };
  },
};
</script>

<style src="./_aboutUsHeader.scss" lang="scss"></style>
