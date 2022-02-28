import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/user/Login'
import Home from '../views/user/Home'
import Register from '../views/user/Register'
import AdminLogin from '../views/admin/AdminLogin'
import AdminHome from '../views/admin/AdminHome'
import Test1 from "../menu/Test1"
import Test2 from "../menu/Test2"
import Test3 from "../menu/Test3"
import Test4 from "../menu/Test4"
import Test5 from '../menu/Test5'
import Test6 from '../menu/Test6'
import novelUpload from "../novel/novelUpload"
import Collection from "../views/user/Collection"
import Information from "../views/user/Information"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true,
    admin: false
  },
  {
    path: '/adminLogin',
    name: 'adminLogin',
    component: AdminLogin,
    hidden: true,
    admin: false
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    hidden: true,
    admin: false
  },
  {
    path: '/novelUpload',
    name: 'novelUpload',
    component: novelUpload,
    hidden: true,
    admin: false
  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
    hidden: true,
    admin: false
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection,
    hidden: true,
    admin: false
  },
  {
    path: '/home',
    name: '导航栏',
    component: Home,
    admin: false,
    children: [
      {
        path: '/test1',
        name: '首页',
        component: Test1,
        admin: false,
      },
      {
        path: '/test2',
        name: '排行榜',
        component: Test2,
        admin: false
      },
      {
        path: '/test3',
        name: '推荐',
        component: Test3,
        admin: false
      },
      {
        path: '/test4',
        name: '分类',
        component: Test4,
        admin: false
      }
    ]

  },
  {
    path: '/adminHome',
    name: '导航栏',
    component: AdminHome,
    hidden: true,
    admin: true,
    children: [
      {
        path: '/test5',
        name: '首页',
        component: Test5,
        admin: true
      },
      {
        path: '/test6',
        name: '审核列表',
        component: Test6,
        admin: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router