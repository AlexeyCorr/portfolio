<template>
  <section class="section">
    <div class="section__wrapper">
      <h2 class="section__title" v-if="title">{{ title }}</h2>
      <p class="section__text" v-if="text">{{ text }}</p>
    </div>
    <component :is="component"></component>
  </section>
</template>

<script>
import About from './About.vue';
import Skills from './Skills.vue';
import Education from './Education.vue';
import Works from './Works.vue';

export default {
  name: 'Section',
  components: {
    About,
    Skills,
    Education,
    Works,
  },
  props: {
    title: String,
    text: String,
    component: String,
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #e7eeed;
  padding: 25px 15px;
  min-height: 100vh;

  &:nth-child(even) {
    background: #f97058;

    .section__title {
      color: #fff;

      &::after {
        background-color: #8C43FF;
      }
    }
  }
}

.section__title {
  text-align: center;
  font-size: 32px;
  color: #000;

  position: relative;
  margin: 0 0 30px;
  padding: 0 0 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 45px;
    height: 5px;
    background-color: #f97058;
  }
}

.section__text {
  font-size: 14px;
  color: #333;

  margin: 0 0 10px;
}
</style>

