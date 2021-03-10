<template>
  <div id="app">
    <TopBar />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/models/Header/Header.vue'
import Footer from './components/models/Footer/Footer.vue'
import TopBar from './components/models/TopBar/TopBar.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    TopBar,
  }
}
</script>
