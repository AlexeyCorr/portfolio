<template>
  <header class="header" :class="{ 'menu--opened': isOpen }">
    <a class="header__logo">
      <img src="../assets/img/icon-logo.svg" alt="logo" width="50" height="50">
    </a>
    <button class="header__toggle" type="button" @click="openMenu">
      <span class="visually-hidden">Открыть меню</span>
    </button>
    <Menu/>
  </header>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: {
    Menu,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openMenu: function () {
      if (!this.isOpen) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  background-color: lightsalmon;
}

.header__logo {
  display: block;
  width: 50px;
  height: 50px;
}

.header__toggle {
  position: fixed;
  top: 14px;
  right: 20px;
  z-index: 100;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -1;
    width: 30px;
    height: 2px;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: translateY(-5px);
  }

  &::after {
    transform: translateY(5px);
  }
}

.menu--opened {
  .header__toggle {
    &::before {
      background-color: #333;
      transform:  rotate(45deg) translateY(0);
    }
    &::after {
      background-color: #333;
      transform:  rotate(-45deg) translateY(0);
    }
  }
  .menu__wrapper {
    display: block;
  }
}
</style>
