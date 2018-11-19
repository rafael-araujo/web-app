import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import EmployeeList from '@/components/EmployeeList'
import EmployeeAdd from '@/components/EmployeeAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/employee-list',
      name: 'EmployeeList',
      component: EmployeeList
    },
    {
      path: '/employee-add',
      name: 'EmployeeAdd',
      component: EmployeeAdd
    }
  ]
})
