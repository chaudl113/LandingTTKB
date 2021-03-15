<template>
  <div>
    <Slide />
    <Reward />
  </div>
</template>

<script>
import Reward from '../components/Reward/index.vue'
import Slide from '../components/Slide/index.vue'

export default {
  name: 'RewardPages',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  created () {
    this.$store.dispatch('fetchPosts')
  },
  components: {
    Reward,
    Slide
  }
}
</script>
