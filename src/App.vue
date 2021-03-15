<template>
  <div id="app" class="content">
    <Header />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
html,
body {
  font-family:'Montserrat', sans-serif!important;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #fff;
  background-color: #160e1e!important;
  box-sizing: border-box;

}

img{
    border: 0 none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    height: auto;
}
</style>
