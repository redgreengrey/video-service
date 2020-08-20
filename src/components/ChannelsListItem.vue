<template>
  <div class="channels-list-item">
    <div class="channels-list-item__content">
      <div class="channels-list-item__content-logo">
        <div class="channels-list-item__content-logo-container">
          <img class="v-catalog-item__image" :src="require(`../assets/tv-channel-images/${channel.image}`)" alt="img">
        </div>
      </div>
      <div class="channels-list-item__content-timetable">
        <div class="channels-list-item__content-timetable--header">
          {{ channel.title }}
        </div>
        <div class="channels-list-item__content-timetable--content"
          v-for="(item, idx) in channel.tvProgram"
          :key="idx"
        >
          <div class="channels-list-item__content-timetable--content-item" :class="{ 'on-air' : item.onAir }">
            {{ item.time }} <span class="channels-list-item__content-timetable--content-name">{{ item.program }}</span>
          </div >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      default: () => {}
    }
  },
  name: 'ChannelsListItem'
}
</script>

<style lang="scss">
  .channels-list-item {
    background-color: #F2F2F2;
    width: 1180px;
    height: 162px;
    margin-bottom: 16px;
    font-family: Rubik, sans-serif;
    color: #333333;
    border-radius: $radius;

    &:nth-last-child(-n + 1) {
      margin-bottom: 0;
    }

    &__content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      &-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 48px 143px;

        &-container {
          width: 114px;
          height: 65px;
        }
      }

      &-timetable {
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        justify-content: center;
        align-items: flex-start;

        &--header {
          font-weight: 500;
          padding-bottom: 17px;
        }

        &--content {
          &-name {
            margin-left: 16px;
          }

          &-item {
            margin-bottom: 12px;
          }
        }
      }
    }
  }

  .on-air {
    color: $red;
  }
</style>
