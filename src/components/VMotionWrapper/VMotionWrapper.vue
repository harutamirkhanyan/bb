<template lang="pug">
Transition(:name='animationType')
  div(ref="obs")
    slot

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'VMotionWrapper',
  //   components: {
  //   Transition,
  // },
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'visibleRight',
    },
  },
  setup(_, { attrs }) {
    const obs = ref(null);
    const animationType = ref(attrs.animationType);

    const animateElement = () => {
      obs.value.classList.add(`${animationType.value}-enter-active`);
      setTimeout(() => {
        obs.value.classList.remove(`${animationType.value}-enter-active`);
      }, 500); // Задержка должна соответствовать продолжительности анимации в CSS
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('Объект в зоне видимости');
          animateElement(); // Вызовите вашу функцию здесь
        } else {
          // console.log('Объект вне зоны видимости');
        }
      });
    };

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1,
      });
      if (obs.value) observer.observe(obs.value);

      onUnmounted(() => {
        if (obs.value) observer.unobserve(obs.value);
      });
    });

    return {
      obs,
    };
  },
};

</script>

<style src="./_vMotionWrapper.scss" lang="scss"></style>
