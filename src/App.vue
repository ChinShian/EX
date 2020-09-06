<template>
  <div id="app">
    <Header />
    <Vote />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Vote from './components/Vote.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Vote,
    Footer,
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/reset';
@import '@/assets/sass/common';
</style>
