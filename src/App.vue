<template>
  <div id="app">
    <Header />
    <Homepage />
    <About />
    <Work />
    <Projects />
    <contact />
    <!-- <Footer /> -->
    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Projects from './components/Projects.vue';
// import Footer from './components/Footer.vue';
import Homepage from './components/Homepage.vue';
import Contact from './components/Contact.vue';




export default {
  name: 'App',
  components: {
    Header,
    Homepage,
    About,
    Work,
    Projects,
    Contact
    // Footer
  },
 
}
</script>

<style lang="scss">

.section-content {
    padding-top: 110px;
}


</style>
