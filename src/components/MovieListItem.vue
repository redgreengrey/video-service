<template>
  <div class="movie-list-item">
    <div
      class="movie-list-item__picture"
    >
      <img class="v-catalog-item__image" :src="require(`../assets/images/${movie.image}`)" alt="image">
      <div class="movie-list-item__picture-description">
        {{ movie.description }}
      </div>
    </div>
    <div class="movie-list-item__name">
      {{ movie.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .movie-list-item {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 434px;
    margin-right: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
    cursor: pointer;

    &__name {
      text-align: left;
      margin-top: 16px;
    }

    .movie-list-item__picture {
      position: relative;
    }

    .movie-list-item__picture-description {
      position: absolute;
      top: 0;
      left: 0;
      width: 89%;
      height: 90%;
      border-radius: $radius;
      text-align: left;
      color: rgba(255, 255, 255, 0);
      font-size: 16px;
      line-height: 140%;
      padding: 16px;

      &:hover {
        color: #fff;
        background-color: rgba(51, 51, 51, 0.8);
      }
    }
  }
</style>
