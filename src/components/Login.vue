<template>
  <div>
    <img src="../assets/logo.png">
    <form name="login">
      <label>Usuário</label>
      <input type="test" v-model="username">
      <label>Senha</label>
      <input type="password" v-model="password">
      <input type="submit" value="Enviar" @click="send">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    send () {
      axios.post('http://127.0.0.1:3000/', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          console.log(response)
          if (response.data.result === 'ok') {
            this.errorMsg = 'logou'
            console.log(this.errorMsg)
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
