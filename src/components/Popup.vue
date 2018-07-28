<template>
    <section class="popup">
      <button class="popup__close" @click="popupClose">
        <span class="visually-hidden">Close</span>
      </button>
      <h2 class="popup__title">Contact me</h2>
      <p class="popup__mail">alexeycorr@gmail.com</p>
      <Social socialText="Social"/>  
    </section>
</template>

<script>
import Social from './Social.vue';

export default {
  name: 'Popup',
  components: {
    Social,
  },
  methods: {
    popupClose: function() {
      const popup = document.querySelector('.popup');
      popup.classList.remove('popup--visibility');
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes visible {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.popup {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 12px;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: linear-gradient(155deg, #fff, #fff 70%, #eee 70%);
  transition: all 0.2s ease-in-out;
  z-index: 50;
  padding: 30px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  &--visibility {
    display: flex;
    animation: visible 0.2s;
  }
}

.popup__close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 55;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -1px;
    width: 30px;
    height: 2px;
    background-color: #000;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.popup__title {
  font-size: 28px;
  font-weight: 400;

  margin: auto 0 25px;
}

.popup__mail {
  font-size: 52px;
  font-weight: 700;

  margin: 0 0 15px;
}
</style>
