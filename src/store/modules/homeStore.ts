/*
 * @Author: your name
 * @Date: 2020-12-02 14:31:44
 * @LastEditTime: 2020-12-02 14:44:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\store\modules\loginStore.ts
 */
import { Commit } from 'vuex';
import {loginData} from '../../const/home'
// 定义的 state 数据
const state: any = {
    loginData:{}
}

const mutations: any = {
    LOGIN_SET(states: any, params: object) {
        states.loginData = params
    }
}

const actions: any = {
    loginAction(context: { commit: Commit }, params: object) {
        context.commit('LOGIN_SET', params)
    }
}

export default {
    namespaced: true, // 必须要开放
    state,
    mutations,
    actions
}
