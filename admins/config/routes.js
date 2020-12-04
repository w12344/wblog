/*
 * @Author: your name
 * @Date: 2020-12-03 15:12:42
 * @LastEditTime: 2020-12-03 17:30:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\admins\config\routes.js
 */
export default [{
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            { path: '/user', redirect: '/user/login', },
        ],
    },
    {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [{
                path: '/',
                component: '../layouts/BasicLayout',
                authority: ['admin', 'user'],
                routes: [{
                        path: '/',
                        redirect: '/welcome',
                    },
                    {
                        path: '/welcome',
                        name: 'welcome',
                        icon: 'smile',
                        component: './Welcome',
                    },
                    {
                        path: '/admin',
                        name: 'admin',
                        icon: 'crown',
                        component: './Admin',
                        authority: ['admin'],
                        routes: [{
                            path: '/admin/sub-page',
                            name: 'sub-page',
                            icon: 'smile',
                            component: './Welcome',
                            authority: ['admin'],
                        }, ],
                    },
                    {
                        path: "/permission",
                        name: "permission",
                        icon: 'user',
                        routes: [{
                                path: '/permission/user',
                                name: 'user-list',
                                icon: 'user',
                                component: './permission/list/index',
                                authority: ['admin'],
                            },
                            {
                                path: '/permission/menu',
                                name: 'menu-list',
                                icon: 'menu',
                                component: './permission/menu/index',
                                authority: ['admin'],
                            }
                        ],
                    },
                    {
                        name: 'list.table-list',
                        icon: 'table',
                        path: '/list',
                        component: './ListTableList',
                    },
                    {
                        component: './404',
                    },
                ],
            },
            {
                component: './404',
            },
        ],
    },
    {
        path: "/category",
        icon: "ordered-list",
        name: 'category',
        routes: [
            { path: '/category', redirect: '/category/list', },
            {
                path: "/category/list",
                name: "category-list",
                component: "./category/index"
            },
        ]
    },
    {
        component: './404',
    },
];