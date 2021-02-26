<template>
  <div>
    <Rank/>
    <New/>
  </div>
</template>

<script>
import Rank from './Rank/index.vue'
import New from './New/index.vue'

export default {
  name: 'Home',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  components: {
    Rank,
    New
  }
}
</script>
