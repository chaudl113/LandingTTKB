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
  font-family: "Titillium Web", sans-serif !important;
}
</style>
