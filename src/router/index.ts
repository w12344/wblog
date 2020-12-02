/*
 * @Author: your name
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-11-30 10:23:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
const Home = (r: any) => require.ensure([], () => r(require('../pages/Home/Index.vue')), 'Home');
const Login = (r: any) => require.ensure([], () => r(require('../pages/Login/Index.vue')), 'Login');
const Register = (r: any) => require.ensure([], () => r(require('../pages/Register/Index.vue')), 'Register');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
