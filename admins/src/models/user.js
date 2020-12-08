/*
 * @Author: your name
 * @Date: 2020-12-03 15:12:42
 * @LastEditTime: 2020-12-08 15:27:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\src\models\user.js
 */
import { queryCurrent, query as queryUsers } from '@/services/user';

const UserModel = {
    namespace: 'user',
    state: {
        currentUser: {},
    },
    effects: {
        * fetch(_, { call, put }) {
            const response = yield call(queryUsers);
            yield put({
                type: 'save',
                payload: response,
            });
        },

        * fetchCurrent(_, { call, put }) {
            const response = yield call(queryCurrent);
            yield put({
                type: 'saveCurrentUser',
                payload: response,
            });
        },
    },
    reducers: {
        saveCurrentUser(state, action) {
            return {...state, currentUser: action.payload.data.data || {} };
            // return {...state, currentUser: action.payload || {} };
        },

        changeNotifyCount(
            state = {
                currentUser: {},
            },
            action,
        ) {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    notifyCount: action.payload.totalCount,
                    unreadCount: action.payload.unreadCount,
                },
            };
        },
    },
};
export default UserModel;