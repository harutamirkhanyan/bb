<template lang="pug">
.hamburger-menu(@click="toggleMenu")
  .bar(:class="{ animate: isActive }")
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isActive = computed(() => store.state.sidebar);

    function toggleMenu() {
      if (isActive.value) {
        store.commit('closeSidebar');
      } else {
        store.commit('openSidebar');
      }
    }

    return { isActive, toggleMenu };
  },
};
</script>


<style lang="scss" scoped>
$bar-width: 25px;
$bar-height: 5px;
$bar-spacing: 10px;



.hamburger-menu {
  position: fixed;
  z-index: 101;
  // top: 0;
  right: 25px;
  margin: auto;
  width: $bar-width;
  height: $bar-height + $bar-spacing * 2;
  cursor: pointer;
}

.bar,
.bar:after,
.bar:before {
  width: $bar-width;
  height: $bar-height;
}

.bar {
  position: relative;
  transform: translateY($bar-spacing);
  background: rgb(0, 0, 0);
  transition: all 0ms 300ms;

  &.animate {
    background: rgba(255, 255, 255, 0);
  }
}

.bar:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: $bar-spacing;
  background: rgb(0, 0, 0);
  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar:after {
  content: "";
  position: absolute;
  left: 0;
  top: $bar-spacing;
  background: rgb(0, 0, 0);
  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar.animate:after {
  top: 0;
  transform: rotate(45deg);
  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar.animate:before {
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
