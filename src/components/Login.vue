<template>
  <div>
    <img src="../assets/logo.png">
    <div>
      <label>Usuário</label>
      <input type="text" v-model="username">
      <label>Senha</label>
      <input type="password" v-model="password">
      <input type="submit" value="Enviar" @click="send">
    </div>
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
      axios.post('http://127.0.0.1:3000/login', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          this.$cookies.set('token', response.data.token, '5h')
          if (response.data.token) {
            console.log(this.$store.state.employeeList)
            this.$router.push({name: 'EmployeeList'})
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
