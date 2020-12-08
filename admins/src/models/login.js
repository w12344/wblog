/*
 * @Author: WZQ
 * @Date: 2020-12-03 15:12:42
 * @LastEditTime: 2020-12-08 15:24:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\models\login.js
 */
import { stringify } from 'querystring';
import { history } from 'umi';
import { fakeAccountLogin } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { message } from 'antd';

const Model = {
    namespace: 'login',
    state: {
        status: undefined,
    },
    effects: {
        * login({ payload }, { call, put }) {
            const response = yield call(fakeAccountLogin, payload);
            if (response.success === true) {
                const urlParams = new URL(window.location.href);
                const params = getPageQuery();
                message.success('🎉 🎉 🎉  登录成功！');
                yield put({
                    type: 'changeLoginStatus',
                    payload: response.data,
                }); // Login successfully
                let { redirect } = params;
                if (redirect) {
                    const redirectUrlParams = new URL(redirect);
                    if (redirectUrlParams.origin === urlParams.origin) {
                        redirect = redirect.substr(urlParams.origin.length);
                        if (redirect.match(/^\/.*#/)) {
                            redirect = redirect.substr(redirect.indexOf('#') + 1);
                        }
                    } else {
                        window.location.href = '/';
                        return;
                    }
                }
                history.replace(redirect || '/');
            } else {
                message.error(response.errorMsg);
            }
        },

        logout() {
            const { redirect } = getPageQuery(); // Note: There may be security issues, please note
            if (window.location.pathname !== '/user/login' && !redirect) {
                history.replace({
                    pathname: '/user/login',
                    search: stringify({
                        redirect: window.location.href,
                    }),
                });
            }
        },
    },
    reducers: {
        changeLoginStatus(state, { payload }) {
            setAuthority(payload);
            return {...state, status: payload.success, type: payload.type ? payload.type : "account" };
        },
    },
};
export default Model;