<template>
  <div >
    <Header />
    <Homepage />
    <About />
    <Work />
    <Projects />
    <contact />
    <Footer />
    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
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
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
*{
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    color: #fff;
}

body{
    min-height: 200vh;
    background-color:rgb(10, 25, 47);
}

.section-content {
    padding-top: 100px;
}


</style>
