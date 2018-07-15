<template>
  <div class="menu__wrapper">
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item" v-for="menu in menuItems" :key="menu.id">
          <a class="menu__link"  href="#">
            {{ menu.item }}
          </a>
        </li>
      </ul>
      <a class="menu__link menu__link--contact" href="#">Контакты</a>
      <Social/>
    </nav>
  </div>
</template>

<script>
import Social from './Social.vue';
export default {
  name: 'Menu',
  components: {
    Social,
  },
  data() {
    return {
      menuItems: [
        { id: 1, item: 'About' },
        { id: 2, item: '2' },
        { id: 3, item: '3' },
        { id: 4, item: '4' },
      ]
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu__wrapper {
    display: none;
    position: fixed;
    top: 12px;
    bottom: 12px;
    left: 12px;
    right: 12px;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
    z-index: 50;
    padding: 100px 20px 20px;
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70% 30%;
    height: 100%;
  }

  .menu__list {
    display: grid;
    align-items: center;
  }

  .menu__item {
    text-align: center;
  }

  .menu__link {
    font-size: 16px;
    text-transform: uppercase;
    color: #333;

    display: block;
  }

  .menu__link--contact {
    display: none;
  }
</style>
