<template>
  <div class="about">
    <Header />
    <Nav />
    <ChannelsList />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import ChannelsList from '../components/ChannelsList'

export default {
  name: 'TVChannels',
  components: {
    ChannelsList,
    Footer,
    Header,
    Nav
  }
}
</script>
