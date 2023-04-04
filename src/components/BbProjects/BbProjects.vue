<template lang="pug">
ul.projects
  li.projects__item(v-for="item in projects" :key="item.id" )
    .projects__imgWrapper
      img.projects__img(:src='item.img' alt='alt' loading='lazy' v-motion-slide-visible-top
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")  
    .projects__content(v-motion-pop-visible
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
