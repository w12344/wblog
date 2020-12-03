/*
 * @Author: your name
 * @Date: 2020-11-24 11:33:03
 * @LastEditTime: 2020-12-02 16:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\utils\element.ts
 */
import Vue from 'vue';
import { Pagination, Dialog, Menu, Submenu, Row, Col, MenuItem, Message, MenuItemGroup, Switch, Input, Button, Popover, Carousel, CarouselItem, Form, FormItem, Backtop, Tabs, TabPane } from 'element-ui';

Vue.use(Pagination);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Switch);
Vue.use(Input);
Vue.use(Button);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(MenuItemGroup);
Vue.use(Dialog);
Vue.use(Popover);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Backtop);

Vue.prototype.$message = Message;
