<template>
  <div>
    <Slide />
    <Instruction />
  </div>
</template>

<script>
import Slide from '../components/Slide/index.vue'
import Instruction from '../components/Instruction/index.vue'

export default {
  name: 'Home',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  components: {
    Slide,
    Instruction
  }
}
</script>
