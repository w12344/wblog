/*
 * @Author: your name
 * @Date: 2020-12-02 14:10:15
 * @LastEditTime: 2020-12-02 14:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\store\index.ts
 */
import Vue from "vue";
import Vuex from "vuex";
import homeStore from "./modules/homeStore";
import loginStore from './modules/loginStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {   // 把 store/modules下的文件引入
    homeStore,
    loginStore
  }
});