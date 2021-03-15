<template>
  <div>
    <Slide />
    <BXH />
  </div>
</template>

<script>
import BXH from '../components/BXH/index.vue'
import Slide from '../components/Slide/index.vue'

export default {
  name: 'Bonus',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  created () {
    this.$store.dispatch('fetchPosts')
  },
  components: {
    BXH,
    Slide
  }
}
</script>
