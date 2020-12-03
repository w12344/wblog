/*
 * @Author: your name
 * @Date: 2020-12-02 15:13:41
 * @LastEditTime: 2020-12-02 15:28:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\store\types.ts
 */

export interface LoginData {
  id: number;
  username: string ;
  password: string ;
  telphone: string;
}

export interface State {
  userinfo: LoginData | any;
}
