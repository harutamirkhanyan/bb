<template lang="pug">
ul.projects
  li.projects__item(v-for="item in projects" :key="item.id" )
    .projects__imgWrapper(  v-motion-slide-visible-right
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
      img.projects__img(:src='item.img' alt='alt' loading='lazy')  
    .projects__content(  v-motion-slide-visible-left
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
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
