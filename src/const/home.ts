/*
 * @Author: your name
 * @Date: 2020-11-27 14:46:41
 * @LastEditTime: 2020-11-27 14:59:02
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
