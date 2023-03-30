<template lang="pug">
ul.projects
  li.projects__item(v-for="item in projects" :key="item.id")
    .projects__imgWrapper
      img.projects__img(:src='item.img' alt='alt' loading='lazy')  
    .projects__content
      span.projects__name {{item.name}}
      h3.projects__title {{item.title}}
      span.projects__url {{item.url}}
</template>

<script>
export default {
  name: 'BbProjects',
  props: {
    projects: {
      tye: Array,
      required: true,
    },
  },
};
</script>

<style src="./_bbProjects.scss" lang="scss"></style>
