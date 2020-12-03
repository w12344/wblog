/*
 * @Author: your name
 * @Date: 2020-12-02 14:31:44
 * @LastEditTime: 2020-12-02 15:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\store\modules\userStore.ts
 */
import { Commit, GetterTree } from 'vuex';
import { State, LoginData } from '../types';
import { setStore, getStore } from '../../utils/utils';

const state: State = {
  userinfo: getStore('userinfo') ? getStore('userinfo') : {},
};

export default {
  namespaced: true,
  state,
  mutations: {
    LOGIN_SET(states: State, params: LoginData) {
      states.userinfo = params;
      setStore('userinfo', params);
    },
  },
  actions: {
    loginAction: (context: { commit: Commit }, params: object) => {
      console.log('123123213s')
      context.commit('LOGIN_SET', params);
    },
  },
  getters: {} as GetterTree<State, any>,
};
