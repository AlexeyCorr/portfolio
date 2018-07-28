<template>
  <section class="section">
    <h2 class="section__title">{{ title }}</h2>
    <p class="section__text">{{ text }}</p>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #e7eeed;
  padding: 10px 20px;

  // &--orange {
  //   background-color: #f97058;

  //   .section__text,
  //   .section__title {
  //     color: #fff;
  //   }
  // }
}

.section__title {
  font-size: 20px;
  color: #f97058;

  margin: 0 0 10px;
}

.section__text {
  font-size: 14px;
  color: #333;

  margin: 0 0 10px;
}
</style>

