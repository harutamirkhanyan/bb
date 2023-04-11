<template lang="pug">
.recommendedContent
  .recommendedContent__header
    p.recommendedContent__text {{description}}
    h2.recommendedContent__title {{title}}
  ul.recommendedContent__wrapper
    li.recommendedContent__item(v-for="project in items" :key="project.id")
      .recommendedContent__imgWrapper
        img.recommendedContent__img(:src='project.src' loading='lazy' :alt='project.alt')
        .recommendedContent__textsBlock
          span.recommendedContent__name {{project.name}}
          h3.recommendedContent__itemTitle {{project.title}}
          a.recommendedContent__more(href='javascript') {{project.more}}
</template>

<script>
export default {
  name: 'RecommendedContent',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style src="./_recommendedContent.scss" lang="scss"></style>
