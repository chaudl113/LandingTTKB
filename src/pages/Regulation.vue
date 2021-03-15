<template>
  <div>
    <Slide />
    <RegulationComponents />
  </div>
</template>

<script>
import Slide from '../components/Slide/index.vue'
import RegulationComponents from '../components/RegulationComponents/index.vue'

export default {
  name: 'Regulation',
  beforeCreate () {
    document.title = this.$route.meta.title
  },
  components: {
    Slide,
    RegulationComponents
  }
}
</script>
