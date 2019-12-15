import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
import Task from '@/view/tasks'
import InsertTask from '@/view/insertTask'
import Social from '@/view/social'
import User from '@/view/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/task',
      children: [
        {
          path: '/task',
          name: 'Task',
          component: Task
        },
        {
          path: '/insertTask',
          name: 'insertTask',
          component: InsertTask
        },
        {
          path: '/social',
          name: 'Social',
          component: Social
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
      ]
    }
  ]
})
