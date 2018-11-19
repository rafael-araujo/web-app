<template>
  <div>
    <div>
      <div style="text-align: center">
        <label>
          <h3>Lista de Funcionários</h3>
        </label>
      </div>
      <br>
      <button @click="add">Cadastrar</button>
      <br>
      <thead>
        <tr>
          <td style="width: 50px">ID</td>
          <td style="width: 300px">Nome</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employeeList" :key="employee.idEmployee">
          <td style="width: 50px">
            {{ employee.idEmployee }}
          </td>
          <td style="text-align: left;width: 300px">
            {{ employee.name }}
          </td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      employeeList: this.$store.state.employeeList
    }
  },
  created () {
    axios.get('http://127.0.0.1:3000/employee', {headers: {'Authorization': 'Bearer ' + this.$cookies.get('token')}})
      .then(response => {
        if (response.status === 200) {
          this.$store.state.employeeList = response.data
        }
      })
      .catch(error => {
        console.error(error)
        this.$router.push({name: 'Login'})
      })
  },
  methods: {
    add () {
      this.$router.push({name: 'EmployeeAdd'})
    }
  }
}
</script>

<style>
</style>
