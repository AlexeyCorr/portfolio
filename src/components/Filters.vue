<template>
  <div class="filters">
    <div class="filters__wrapper" v-for="item in filters" :key="item.id">
      <input class="filters__input" type="checkbox" :name="item.name" :id="item.type">
      <label class="filters__button" :for="item.type">{{ item.title }}</label>
    </div>
    
    <!-- <button class="filters__button" v-for="item in filters" :key="item.id">{{ item.name }}</button> -->
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    title: String,
    name: String,
    type: String
  },
  data: function () {
    return {
      filters: [
        {
          id: 1,
          title: 'CSS3',
          name: 'css',
          type: 'css',
        },
        {
          id: 2,
          title: 'HTML5',
          name: 'html',
          type: 'html',
        },
        {
          id: 3,
          title: 'JavaScript',
          name: 'js',
          type: 'js',
        },
        {
          id: 4,
          title: 'SCSS',
          name: 'scss',
          type: 'scss',
        },
        {
          id: 5,
          title: 'Gulp',
          name: 'gulp',
          type: 'gulp',
        },
        {
          id: 6,
          title: 'Vue.js',
          name: 'vue',
          type: 'vue',
        },
        {
          id: 7,
          title: 'Адаптивный дизайн',
          name: 'adaptive',
          type: 'adaptive',
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px 0;
  }

  .filters__input {
    display: none;

    &:checked + .filters__button {
      background-color: #000;
    }
  }

  .filters__button {
    font-size: 14px;
    color: #fff;
    font-weight: 700;

    display: block;
    padding: 4px 8px;
    margin: 2px 4px;
    border: none;
    background-color: #8C43FF;
    cursor: pointer;
  }
</style>
