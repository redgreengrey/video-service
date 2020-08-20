<template>
  <div class="checkbox-wrapper" @click="toggle">
    <div class="checkbox">
      <img
        v-if="isChecked"
        :src="require(`../assets/check.svg`)"
        class="checkbox-check"
      />
      <div class="checkbox-text"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    toggle () {
      this.$emit('checkboxToggle')
    }
  }
}
</script>

<style scoped lang="scss">
  .checkbox {
    display: flex;

    &-check {
      margin: 4px 3px;
    }

    &-text {
      margin-left: 26px;
      position: absolute;
    }

    &-wrapper {
      position: relative;
      border-radius: 4px;
      background-color: transparent;
      border: 1px solid #333333;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
</style>
