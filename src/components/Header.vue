<template>
  <header class="header" :class="{ 'menu--opened': isOpen }">
    <div class="container header__wrapper">
      <a class="header__logo">
        <img src="../assets/img/icon-logo.svg" alt="logo" width="50" height="50">
      </a>
      <button class="header__toggle" type="button" @click="openMenu">
        <span class="visually-hidden">Открыть меню</span>
      </button>
      <Menu/>
      <div class="header__board">
        <h1 class="header__title">
          Front-end Developer
        </h1>
        <div class="header__pic">
          <img src="../assets/img/rise.jpg" alt="My photo">
        </div>
      </div>
    </div>
    
  </header>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: {
    Menu
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu: function() {
      if (!this.isOpen) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  background-color: #f97058;
}

.header__wrapper {
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 50px auto;
  grid-row-gap: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.header__logo {
  display: block;
  width: 50px;
  height: 50px;
}

.header__board {
  grid-column: 1 / 3;
}

.header__title {
  text-align: center;
  font-size: 2em;
  color: #fff;

  margin: 10px;
}

.header__pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 30px auto;
}

.header__toggle {
  position: fixed;
  top: 14px;
  right: 20px;
  z-index: 100;
  width: 30px;
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
    left: 0;
    top: 50%;
    margin-top: -1px;
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
      transform: rotate(45deg) translateY(0);
    }
    &::after {
      background-color: #333;
      transform: rotate(-45deg) translateY(0);
    }
  }
  .menu__wrapper {
    display: block;
    animation: 0.3s visible ease-in-out;
  }

  @keyframes visible {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

@media (min-width: 1000px) {
  .header__wrapper {
    padding: 20px 0;
  }

  .header__toggle {
    display: none;
  }
}
</style>
