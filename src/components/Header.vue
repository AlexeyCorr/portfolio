<template>
  <header class="header">
    <a class="header__logo">
      <img src="../assets/img/icon-logo.svg" alt="logo" width="50" height="50">
    </a>
    <Menu/>
  </header>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'Header',
  components: {
    Menu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    width: 100%;
  }
</style>
