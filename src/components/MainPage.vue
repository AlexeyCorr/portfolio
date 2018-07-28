<template>
  <main class="main-page">
    <About/>
  </main>
</template>

<script>
import About from './About.vue';

export default {
  name: 'MainPage',
  components: {
    About,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
  .main-page {
    flex-grow: 1;
  }
</style>
