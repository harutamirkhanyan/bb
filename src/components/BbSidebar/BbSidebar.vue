<template lang="pug">
.sidebar(v-if="sidebar")
  //- span.sidebar__close(@click="closeSidebar") &times;
  .sidebar__content
    slot

</template>

<script>
import { computed, onMounted, onUnmounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import bbPhone from '@/assets/svgs/bbPhone.svg';
import sendMail from '@/assets/svgs/sendMail.svg';
import facebook from '@/assets/svgs/bbfacebook.svg';
import instagram from '@/assets/svgs/bbinstagram.svg';
export default {
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);
    const closeSidebar = () => store.commit('closeSidebar');


    const handleOutsideClick = (event) => {
      const sidebarEl = document.querySelector('.sidebar');
      const openButton = document.querySelector('.header__burger');

      if (
        sidebar.value &&
        sidebarEl &&
        !sidebarEl.contains(event.target) &&
        openButton &&
        !openButton.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    onMounted(() => {
      window.addEventListener('click', handleOutsideClick);
    });

    onUnmounted(() => {
      window.removeEventListener('click', handleOutsideClick);
    });

    return {
      sidebar,
      bbPhone,
      sendMail,
      facebook,
      instagram,
      closeSidebar,
    };
  },
};
</script>

<style src="./_bbSidebar.scss" lang="scss"></style>
