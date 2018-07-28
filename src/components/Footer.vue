<template>
  <footer class="footer">
    <p class="footer__text">AlexeyCorr - Moscow {{ getDate() }}</p>
    <Social/>
  </footer>
</template>

<script>
import Social from './Social.vue';

export default {
  name: 'Footer',
  components: {
    Social,
  },
  methods: {
    getDate: function () {
      const newDate = new Date();
      return this.date = newDate.getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
  .footer {
    padding: 10px 20px;
    background-color: #fff;
    margin-top: auto;
  }

  .footer__text {
    font-size: 12px;
    color: #333;
    text-align: center;

    margin: 0 0 5px;
  }
</style>
