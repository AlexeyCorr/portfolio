<template>
  <div class="social">
    <p class="social__text" v-if="socialText">{{ socialText }}</p>
    <ul class="social__list">
      <li class="social__item" v-for="social in socialList" :key="social.id">
        <a class="social__link" :class="'social__link--' + social.icon" :href="social.link" target="_blank">
          <svg width="20" height="20">
            <use :xlink:href="'#' + social.icon"></use>
          </svg>
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
  data: function () {
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
  width: 20px;
  height: 20px;
  margin: 5px;

  svg {
    transition: all 0.2s ease-in-out;
  }

  &--email {
    &:hover,
    &:focus {
      svg {
        fill: #fbd00a;
      }
    }
  }
  &--github {
    &:hover,
    &:focus {
      svg {
        fill: #8c43ff;
      }
    }
  }
  &--telegram {
    &:hover,
    &:focus {
      svg {
        fill: #2ca5e0;
      }
    }
  }
  &--vk {
    &:hover,
    &:focus {
      svg {
        fill: #6089c0;
      }
    }
  }
  &--codepen {
    &:hover,
    &:focus {
      svg {
        fill: #f97058;
      }
    }
  }
  &--instagram {
    &:hover,
    &:focus {
      svg {
        fill: #d23287;
      }
    }
  }
}
</style>
