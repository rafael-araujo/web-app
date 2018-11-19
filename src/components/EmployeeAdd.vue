<template>
  <div>
    <div>
      <div style="text-align: center">
        <label>
          <h3>Cadastro de Funcionário</h3>
        </label>
      </div>
      <div>
        <label>Nome</label>
        <input type="text" v-model="name">
        <br>
        <label>Usuário</label>
        <input type="text" v-model="username">
        <br>
        <label>Senha</label>
        <input type="password" v-model="password">
        <br>
        <input type="submit" value="Enviar" @click="send">
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      name: '',
      username: '',
      password: ''
    }
  },
  created () {
    if (!this.$cookies.get('token')) {
      this.$router.push({name: 'EmployeeList'})
    }
  },
  methods: {
    send () {
      axios.post('http://127.0.0.1:3000/employee', {
        name: this.name,
        username: this.username,
        password: this.password
      }, {
        headers: {'Authorization': 'Bearer ' + this.$cookies.get('token')}
      })
        .then(response => {
          if (response.data) {
            this.$router.push({name: 'EmployeeList'})
          }
        })
        .catch(error => {
          console.error(error)
          this.$router.push({name: 'Login'})
        })
    }
  }
}
</script>

<style>
</style>
