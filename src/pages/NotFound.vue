<template>
  <div class="not-found text-center" style="padding-top:200px;">
    <h1>404</h1>
    <p> Page Not Found Error</p>
    <button v-on:click="notFound" class="button">Trang chủ</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {}
  },
  methods: {
    notFound () {
      this.$router.replace('/comics')
    }
  }
}
</script>

<style scoped>
.not-found {
  margin-top: 40px;
}
button {
  margin: 10px 0;
  background-color: #0476F2;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
h3 {
  font-weight: normal;
}
</style>
