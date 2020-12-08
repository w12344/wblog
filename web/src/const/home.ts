/*
 * @Author: your name
 * @Date: 2020-11-27 14:46:41
 * @LastEditTime: 2020-12-08 17:13:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\const\home.ts
 */
type ChildrenData = {
  key: string;
  menuName: string;
  icon: string;
  path: string;
  isSubmenu: boolean;
};

export type ArticleItemData = {
  classify: string;
  collection_num: string;
  content: string;
  gmtCreate: string;
  gmtModified: string | null;
  id: number;
  img: string | null;
  introduction: string;
  keywords: string | null;
  tag: string | null;
  title: string;
  user_id: number;
  user_name: string | null;
};

export type NavParams = {
  key: string;
  menuName: string;
  icon: string;
  path: string;
  isSubmenu: boolean;
  hot: boolean;
  childrenList?: Array<ChildrenData>;
};

export type NavListItem = {
  key: string;
  navName: string;
  icon: string;
  path: string;
};

export type loginData = {
  id: string;
  username: string;
  password: string;
  telphone: string;
};
