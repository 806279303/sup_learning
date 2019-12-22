import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
import Task from '@/view/tasks'
import TaskDetail from '@/view/taskDetail'
import InsertTask from '@/view/insertTask'
import Social from '@/view/social'
import User from '@/view/user'
import UserInfo from '@/view/userInfo'
import UserCollection from '@/view/userCollection'

//解决路由重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
          path: '/taskDetail',
          name: 'TaskDetail',
          component: TaskDetail
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
          component: User,
          redirect: '/user/userInfo',
          children: [
            {
              path: '/user/userInfo',
              name: 'UserInfo',
              component: UserInfo
            },
            {
              path: '/user/userCollection',
              name: 'UserCollection',
              component: UserCollection
            },
          ]
        },
      ]
    }
  ]
})
