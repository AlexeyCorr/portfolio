<template>
  <div id="app">
    <Header/>
    <MainPage msg="Hello Vue!"/>
    <Footer/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    MainPage,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";

body {
  font-size: 14px;
  line-height: normal;
  font-family: "Roboto", "Arial", sans-serif;
  color: #000000;
  font-style: normal;
  background: linear-gradient(155deg, #e7eeed, #e7eeed 70%, #eee 70%);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  background-color: transparent;
}

.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  -webkit-clip-path: inset(100%);

          clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.container {
  min-width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 708px;
  }

  @media (min-width: 1000px) {
    width: 940px;
  }

  @media (min-width: 1200px) {
    width: 1150px;
  }
}

.title {
  font-size: 20px;
  color: #f97058;

  margin: 0 0 10px;
}

.text {
  font-size: 14px;
  color: #333;

  margin: 0 0 10px;
}
</style>
