<template>
  <div class="social">
    <ul class="social__list">
      <li class="social__item" v-for="social in socialList" :key="social.id">
        <a class="social__link"  :href="social.link" target="_blank">{{ social.item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      socialList: [
        {id: 1, item: 'vk', link: 'www'},
        {id: 2, item: 'vk', link: 'www'},
        {id: 3, item: 'vk', link: 'www'},
        {id: 4, item: 'vk', link: 'www'},
        {id: 5, item: 'vk', link: 'www'},
      ],
    }
  }
};
</script>

<style scoped lang="scss">

</style>
