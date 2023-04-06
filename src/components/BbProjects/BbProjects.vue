<template lang="pug">
ul.projects
  li.projects__item(v-for="(item, index) in projects" :key="item.img")
    .projects__imgWrapper(v-cloak v-show="loadedImages[index]")
      img.projects__img(
      :src='item.img' alt='alt' loading='lazy' 
      v-motion-slide-visible-top
      :initial="{opacity: 0, y: 100,}"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 1 } }"
      :delay="100"
      )
    .loading(v-show="!loadedImages[index]" ) Loading...
    .projects__content(v-motion-pop-visible
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :hovered="{ scale: 1 }"
      :delay="100")
      span.projects__geo {{item.geo}}
      h3.projects__title {{item.title}}
      span.projects__url {{item.more}}
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  name: 'BbProjects',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const loadedImages = reactive(new Array(props.projects.length).fill(false));
    onMounted(() => {
      props.projects.forEach((project, index) => {
        const img = new Image();
        img.src = project.img;
        img.onload = () => {
          loadedImages[index] = true;
        };
      });
    });

    return {
      loadedImages,
    };
  },
};
</script>

<style src="./_bbProjects.scss" lang="scss"></style>
