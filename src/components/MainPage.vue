<template>
  <main class="main-page">
    <Section v-for="section in sectionData" :key="section.id" :title="section.title" :text="section.text" :component="section.component" :id="section.link"/>
  </main>
</template>

<script>
import Section from './Section.vue';

export default {
  name: 'MainPage',
  components: {
    Section,
  },
  data: function () {
    return {
      sectionData: [
        {
          id: 1,
          title: "About me",
          text: "Hi, I'm Alexey. Nice to meet you.",
          component: 'About',
          link: 'about',
        },
        {
          id: 2,
          title: 'Skills',
          text: 'My skills',
          component: 'Skills',
          link: 'skills',
        },
        {
          id: 3,
          title: 'Education',
          text: '',
          component: 'Education',
          link: 'education',
        },
        {
          id: 4,
          title: 'Works',
          text: '',
          component: 'Works',
          link: 'works',
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
