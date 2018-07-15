<template>
  <div id="app">
    <Header/>
    <HelloWorld msg="Hello Vue!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
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
  background-color: lightseagreen;
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
</style>
