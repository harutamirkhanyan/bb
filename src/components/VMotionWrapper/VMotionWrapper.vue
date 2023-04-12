<template lang="pug">
template(v-if="animationType === 'visibleRight'")
  div(v-motion-slide-visible-right
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1 }"
    :delay="100")
    <slot></slot>
template(v-if="animationType === 'visibleLeft'")
  div(v-motion-slide-visible-left
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1 }"
    :delay="100")
    <slot></slot>
template(v-if="animationType === 'visibleTop'")
  div(v-motion-slide-visible-top
    :initial="{opacity: 0, y: 100,}"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 1 } }"
    :delay="100")
    <slot></slot>
template(v-if="animationType === 'visibleBottom'")
  div(v-motion-slide-visible-bottom
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1 }"
    :delay="50")
    <slot></slot>
</template>

<script>
export default {
  name: 'VMotionWrapper',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'visibleRight',
    },
  },
};
</script>
