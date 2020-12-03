/*
 * @Author: WZQ
 * @Date: 2020-11-18 18:07:41
 * @LastEditTime: 2020-12-02 15:55:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\main.ts
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import './utils/index';
import './assets/styles/border.scss';
import './assets/styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/element.scss';
import './assets/styles/reset.scss';
import './assets/css/iconfont/iconfont.css';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
