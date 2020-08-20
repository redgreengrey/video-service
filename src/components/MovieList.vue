<template>
  <div class="movie-list">
    <div class="header">
      &#128293; Новинки
    </div>
    <div class="movie-list-item-container">
      <MovieListItem
        v-for="movie in MOVIES"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieListItem from './MovieListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  computed: {
    ...mapGetters([
      'MOVIES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_MOVIES'
    ])
  },
  mounted () {
    this.GET_MOVIES()
  }
}
</script>

<style scoped lang="scss">
  .movie-list {
    display: flex;
    flex-direction: column;
    width: calc(1440px * 82%);
    min-width: 400px;
    max-width: 1180px;
    margin: 30px auto;

    &-item-container {
      display: flex;
    }
  }

  .header {
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #333333;
    margin-bottom: 15px;
  }
</style>
