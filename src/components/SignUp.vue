<template>
  <div class="sign-up">
    <img src="../assets/dc_logo.jpg" width="300px" />
    <h3>Create a new account</h3>
    <input
      v-model="email"
      type="text"
      class="input"
      placeholder="Email"
      required
    />
    <br />
    <input
      v-model="password"
      type="password"
      class="input"
      placeholder="Password"
      required
    />
    <br />
    <button v-on:click="signUp" class="button">Sign Up!</button>
    <button class="button">
      <router-link to="/login">
        Back
      </router-link>
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace('/login')
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
}
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
      text-align: center;
}
input {
  align-self: center;
  margin: 10px 0;
  width: auto;
  padding: 15px;
}
button {
  margin: 10px 10px;
   background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
h3 {
  font-weight: normal;
}
</style>
