<template>
  <div class="works__wrapper container">
    <Filters/>
    <div class="works">
      <article class="works__item" v-for="work in worksList" :key="work.id">
        <a class="works__pic-link" :href="work.linked" target="_blank">
          <div class="works__pic">
            <img :src="work.picture" :alt="work.alt" width="350" height="250">
          </div>
        </a>
        <div class="works__desc">
          <a :href="work.linked" target="_blank">
            <h4 class="works__title">{{ work.title }}</h4>
          </a>
          <p class="works__text">{{ work.text }}</p>
          <ul class="works__link-list">
            <li v-for="item in work.link" :key="item.id">
              <a class="works__link" :class="'works__link--' + item.icon" :href="item.link" target="_blank">
                <svg width="20" height="20">
                  <use :xlink:href="'#' + item.icon"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Filters from './Filters.vue';

export default {
  name: 'Works',
  components: {
    Filters,
  },
  data: function () {
    return {
      worksList: [
        {
          id: 1,
          title: 'Седона',
          text: 'Личный проект интенсива «Базовый HTML и CSS»',
          picture: require('../assets/img/bg-header.jpg'),
          alt: 'Учебный проект Седона',
          linked: '/sedona',
          link: [
            {
              id: 1,
              link: '/sedona',
              name: 'Просмотр',
              icon: 'global',
            },
            {
              id: 2,
              link: 'https://github.com/AlexeyCorr/368101-sedona',
              name: 'Исходники',
              icon: 'github',
            },
          ],
        },
        {
          id: 2,
          title: 'Мишка',
          text: 'Личный проект интенсива «Продвинутый HTML и CSS»',
          picture: require('../assets/img/bg-header.jpg'),
          alt: 'Учебный проект Мишка',
          linked: '/mishka',
          link: [
            {
              id: 1,
              link: '/mishka',
              name: 'Просмотр',
              icon: 'global',
            },
            {
              id: 2,
              link: 'https://github.com/AlexeyCorr/learn',
              name: 'Исходники',
              icon: 'github',
            },
          ],
        },
        {
          id: 3,
          title: 'Кексобукинг',
          text: 'Личный проект интенсива «Базовый JavaScript»',
          picture: require('../assets/img/bg-header.jpg'),
          alt: 'Учебный проект Кексобукинг',
          linked: '/keksobooking',
          link: [
            {
              id: 1,
              link: '/keksobooking',
              name: 'Просмотр',
              icon: 'global',
            },
            {
              id: 2,
              link: 'https://github.com/AlexeyCorr/368101-keksobooking',
              name: 'Исходники',
              icon: 'github',
            },
          ],
        },
        {
          id: 4,
          title: 'Кекстаграм',
          text: 'Личный проект интенсива «Базовый JavaScript»',
          picture: require('../assets/img/bg-header.jpg'),
          alt: 'Учебный проект Кексобукинг',
          linked: '/kekstagram',
          link: [
            {
              id: 1,
              link: '/kekstagram',
              name: 'Просмотр',
              icon: 'global',
            },
            {
              id: 2,
              link: 'https://github.com/AlexeyCorr/368101-kekstagram',
              name: 'Исходники',
              icon: 'github',
            },
          ],
        },
        {
          id: 5,
          title: 'Портфолио',
          text: 'Личный сайт, разработан с использованием Vue.js',
          picture: require('../assets/img/bg-header.jpg'),
          alt: 'Личная страница «Портфолио»',
          linked: '/portfolio',
          link: [
            {
              id: 1,
              link: '/portfolio',
              name: 'Просмотр',
              icon: 'global',
            },
            {
              id: 2,
              link: 'https://github.com/AlexeyCorr/portfolio',
              name: 'Исходники',
              icon: 'github',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .works {
    display: grid;
    align-items: stretch;
    justify-content: center;
    grid-gap: 30px;
    grid-template-columns: minmax(auto, 300px);
  }

  .works__item {
    text-align: center;

    position: relative;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    &:hover,
    &:focus {
      box-shadow: 0 2px 15px 0 #999;
    }
  }

  .works__pic-link {
    display: block;

    &:hover,
    &:focus {
      img {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }

  .works__pic {
    position: relative;
    width: 100%;
    height: 165px;
    margin: 0 0 10px;
    overflow: hidden;

    img {
      position: absolute;
      max-width: 400px;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease-in-out;
    }
  }

  .works__desc {
    padding: 0 20px 10px;
  }

  .works__title {
    font-size: 20px;
    color: #2c2c2c;

    margin: 0 0 10px;
  }

  .works__text {
    font-size: 16px;
    color: #2c2c2c;

    margin: 0 0 10px;
  }

  .works__link-list {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .works__link {
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px 15px;

    svg {
      transition: all 0.2s ease-in-out;
    }

    &--global {
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
  }

  @media (min-width: 768px) {
    .works {
      grid-template-columns: 300px 300px;
      justify-content: space-between
    }
  }

    @media (min-width: 1000px) {
    .works {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>