<template>
  <div class="home">
    <Header />
    <Nav />
    <MovieList />
    <GenresList />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import MovieList from '../components/MovieList.vue'
import GenresList from '../components/GenresList.vue'

export default {
  name: 'Movies',
  components: {
    Footer,
    Header,
    Nav,
    MovieList,
    GenresList
  }
}
</script>

<style scoped lang="scss">
  .home {

  }
</style>
