<template>
  <div>
    <Rank />
    <Instruction />
    <Description />
    <Minigame />
    <BXH />
  </div>
</template>

<script>
import Rank from '../components/Rank/index.vue'
import BXH from '../components/BXH/index.vue'
import Description from '../components/Description/index.vue'
import Instruction from '../components/Instruction/index.vue'
import Minigame from '../components/Mimigame/index.vue'

export default {
  name: 'Home',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  created () {
    this.$store.dispatch('fetchPosts')
  },
  components: {
    Rank,
    BXH,
    Description,
    Instruction,
    Minigame
  }
}
</script>
