<template>
  <div class="education container">
    <ul class="education__list">
      <li class="education__item" v-for="item in itemList" :key="item.id">
        <span class="education__date">{{ item.date }}</span>
        <h3 class="education__title">{{ item.title }}<sup>{{ item.type }}</sup></h3>
        <p class="education__desc">{{ item.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data: function () {
    return {
      itemList: [
        {
          id: 1,
          date: '2010 - 2016',
          title: 'МИТХТ им. М.В. Ломоносова',
          type: 'Высшее',
          desc: 'Получил высшее образование по специальности порошковая металлургия',
        },
        {
          id: 2,
          date: '2010 - 2016',
          title: 'МИТХТ им. М.В. Ломоносова',
          type: 'Высшее',
          desc: 'Получил высшее образование по специальности порошковая металлургия',
        },
        {
          id: 3,
          date: '2010 - 2016',
          title: 'МИТХТ им. М.В. Ломоносова',
          type: 'Высшее',
          desc: 'Получил высшее образование по специальности порошковая металлургия',
        },
        {
          id: 4,
          date: '2010 - 2016',
          title: 'МИТХТ им. М.В. Ломоносова',
          type: 'Высшее',
          desc: 'Получил высшее образование по специальности порошковая металлургия',
        },
        {
          id: 5,
          date: '2010 - 2016',
          title: 'МИТХТ им. М.В. Ломоносова',
          type: 'Высшее',
          desc: 'Получил высшее образование по специальности порошковая металлургия',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.education__list {
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 6px;
    width: 1px;
    height: 100%;
    background-color: rgba(140, 67, 255, 0.2);
  }
}

.education__item {
  position: relative;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: 0 0 25px;
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent;

  &::before {
    content: "";
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #8C43FF;
    z-index: 2;
  }

  &:hover {
    border-color: #8C43FF;
    transform: translateY(-3px);
  }
}

.education__date {
  font-size: 12px;
  color: #f97058;

  display: block;
  margin: 0 0 5px;
}

.education__title {
  font-size: 16px;
  color: #000;

  margin: 0 0 10px;

  sup {
    font-size: 10px;
    color: #999;
    font-weight: 400;
  }
}

.education__desc {
  font-size: 14px;
  color: #000;

  margin: 0;
}

@media (min-width: 768px) {
  .education__item {
    padding: 20px;
  }

  .education__date {
    font-size: 14px;
    margin: 0 0 10px;
  }

  .education__title {
    font-size: 20px;
    margin: 0 0 15px;
  }

  .education__desc {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  .education__item {
    padding: 25px;
  }

  .education__date {
    margin: 0 0 15px;
  }

  .education__title {
    font-size: 22px;
    margin: 0 0 20px;
  }
}
</style>
