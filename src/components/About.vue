<template>
  <section class="about">
    <!-- <h2 class="title">Hi, I'm Alexey. Nice to meet you.</h2> -->
    <!-- <div class="about__photo">
      <img src="../assets/img/rise.jpg" alt="My photo">
    </div> -->
    <!-- <p class="text">Since beginning of my journey to the world of web development a year has passed.</p> -->
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  padding: 10px 20px;
}

.about__photo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 180px;
  margin: 0 auto 10px;

  img {
    height: 180px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
  }
}
</style>

