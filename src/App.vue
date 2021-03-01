<template>
  <div id="app" class="content">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/index.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
html,
body {
  font-family: "Montserrat", arial, helvetica, sans-serif !important;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #fff;
}

img{
    border: 0 none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    height: auto;
}
</style>
