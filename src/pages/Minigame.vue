<template>
  <div>
    <Slide />
    <Mini />
  </div>
</template>

<script>
import Slide from '../components/Slide/index.vue'
import Mini from '../components/Mini/index.vue'

export default {
  name: 'Minigame',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  components: {
    Slide,
    Mini
  }
}
</script>
