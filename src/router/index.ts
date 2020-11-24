/*
 * @Author: your name
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-11-19 15:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }]
})