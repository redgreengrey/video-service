<template>
  <div class="login-popup">
    <div v-on-clickaway="closePopup" class="login-popup__container">
      <div class="login-popup__content">
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'LoginPopup',
  props: {},
  data () {
    return {

    }
  },
  methods: {
    closePopup () {
      this.$emit('closePopup')
    }
  },
  mixins: [clickaway]
}
</script>

<style scoped lang="scss">
  .login-popup {
    position: absolute;
    width: 100%;
    height: 135%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(51, 51, 51, 0.8);
    z-index: 1;

    &__container {
      width: 232px;
      height: 322px;
      top: 200px;
      left: 42%;
      position: absolute;
      background: #FFFFFF;
      border-radius: 8px;
      padding: 36px;
    }

    &__header {

    }

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__footer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width : 1440px) {
    .login-popup {

    }
  }

  @media (max-width : 1080px) {
    .login-popup {
      width: 120%;
      height: 147%;
    }

    .login-popup__container {
      left: 38%;
    }
  }

  @media (max-width : 768px) {
    .login-popup {
      width: 169%;
      height: 212%;
    }

    .login-popup__container {
      left: 38%;
    }
  }
</style>
