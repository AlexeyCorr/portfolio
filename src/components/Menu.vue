<template>
  <div class="menu__wrapper">
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item" v-for="menu in menuItems" :key="menu.id">
          <a class="menu__link" :href="menu.link">
            {{ menu.item }}
          </a>
        </li>
      </ul>
      <a class="menu__link menu__link--contact" href="#" @click.prevent="openContact">Contact</a>
      <Social socialText = "Get in touch"/>
    </nav>
    <Popup/>
  </div>
</template>

<script>
import Social from './Social.vue';
import Popup from './Popup.vue';

export default {
  name: 'Menu',
  components: {
    Social,
    Popup,
  },
  data() {
    return {
      menuItems: [
        { id: 1, item: 'About', link: 'link', },
        { id: 2, item: 'Skills', link: 'link', },
        { id: 3, item: 'Education', link: 'link', },
        { id: 4, item: 'Works', link: 'link' },
      ],
    };
  },
  methods: {
    openContact: function () {
      const popup = document.querySelector('.popup');
      popup.classList.add('popup--visibility');
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.menu__wrapper {
  display: none;
  position: fixed;
  top: 12px;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: linear-gradient(155deg, #fff, #fff 70%, #eee 70%);
  transition: all 0.2s ease-in-out;
  z-index: 50;
  padding: 100px 20px 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}

.menu {
  display: grid;
  height: 100%;
}

.menu__list {
  display: grid;
  align-items: center;
}

.menu__item {
  text-align: center;
  padding: 0 10px;
}

.menu__link {
  font-size: 16px;
  text-transform: uppercase;
  color: #333;
  text-align: center;

  position: relative;
  display: inline;
  padding: 10px 0;

  &--active {
    color: #f97058;
  }
}

.menu__link--contact {
  display: none;
}

@media (min-width: 1000px) {
  .menu__wrapper {
    position: static;
    display: block;
    background: none;
    box-shadow: none;
    padding: 0;
  }

  .menu {
    grid-template-columns: auto 1fr;

    .social {
      display: none;
    }
  }

  .menu__list {
    grid-template-columns: repeat(4, 1fr);
  }

  .menu__link {
    color: #fff;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #8C43FF;
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;
    }

    &--active {
      color: #8C43FF;
      &::after {
        width: 100%;
      }
    }

    &:hover,
    &:focus {
      color: #8C43FF;

      &::after {
        width: 100%;
      }
    }
  }

  .menu__link--contact {
    display: inline;
  }
}
</style>
