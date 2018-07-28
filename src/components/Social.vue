<template>
  <div class="social">
    <p class="social__text" v-if="socialText">{{ socialText }}</p>
    <ul class="social__list">
      <li class="social__item" v-for="social in socialList" :key="social.id">
        <a class="social__link" :class="'social__link--' + social.icon"  :href="social.link" target="_blank">
          <span class="visually-hidden">{{ social.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Social',
  props: {
    socialText: String,
  },
  data() {
    return {
      socialList: [
        {
          id: 1,
          name: 'Email',
          link: 'mailto:alexeycorr@gmail.com',
          icon: 'email',
        },
        {
          id: 2,
          name: 'GitHub',
          link: 'https://github.com/AlexeyCorr',
          icon: 'github',
        },
        {
          id: 3,
          name: 'Telegram',
          link: 'www',
          icon: 'telegram',
        },
        {
          id: 4,
          name: 'VK',
          link: 'https://vk.com/alexeycorr',
          icon: 'vk',
        },
        {
          id: 5,
          name: 'CodePen',
          link: 'https://codepen.io/AlexeyCorr/',
          icon: 'codepen',
        },
        {
          id: 6,
          name: 'Instagram',
          link: 'https://www.instagram.com/alexeycodes/',
          icon: 'instagram',
        },
      ],
    };
  },
};
</script>

<style scoped lang='scss'>
.social {
  margin: auto 0 0;
}

.social__text {
  font-size: 12px;
  color: #333;
  text-align: center;
  text-transform: uppercase;

  margin: 0 0 20px;
}

.social__list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.social__link {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 2px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;

  &--email {
    background-image: url("../assets/img/icons/icon-email.svg");
  }

  &--github {
    background-image: url("../assets/img/icons/icon-github.svg");
  }

  &--telegram {
    background-image: url("../assets/img/icons/icon-telegram.svg");
  }

  &--vk {
    background-image: url("../assets/img/icons/icon-vk.svg");
  }

  &--codepen {
    background-image: url("../assets/img/icons/icon-codepen.svg");
  }

  &--instagram {
    background-image: url("../assets/img/icons/icon-instagram.svg");
  }
}
</style>
