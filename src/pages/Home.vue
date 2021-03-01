<template>
  <div>
    <Rank/>
    <New/>
    <Instruction/>
    <Description/>
  </div>
</template>

<script>
import Rank from '../components/Rank/index.vue'
import New from '../components/New/index.vue'
import Description from '../components/Description/index.vue'
import Instruction from '../components/Instruction/index.vue'

export default {
  name: 'Home',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  components: {
    Rank,
    New,
    Description,
    Instruction
  }
}
</script>
