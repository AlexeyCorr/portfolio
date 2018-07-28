<template>
  <main class="main-page">
    <Section v-for="section in sectionData" :key="section.id" :title="section.title" :text="section.text" :class="section.bg"/>
  </main>
</template>

<script>
import Section from './Section.vue';

export default {
  name: 'MainPage',
  components: {
    Section,
  },
  data() {
    return {
      sectionData: [
        {
          id: 1,
          title: `Hi, I'm Alexey. Nice to meet you.`,
          text: `Since beginning of my journey to the world of web development a year has passed.`,
        },
        {
          id: 2,
          title: `Skills`,
          text: `My skills`,
          bg: `section--orange`,
        },
        {
          id: 3,
          title: `Education`,
          text: ``,
        },
        {
          id: 4,
          title: `Works`,
          text: ``,
          bg: `section--orange`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .main-page {
    flex-grow: 1;
  }
</style>
