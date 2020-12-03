/*
 * @Author: your name
 * @Date: 2020-12-02 14:10:15
 * @LastEditTime: 2020-12-02 15:45:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\store\index.ts
 */
import Vue from "vue";
import Vuex from "vuex";
import userStore from "./modules/userStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {  
    userStore,
  }
});