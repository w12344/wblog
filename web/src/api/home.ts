/*
 * @Author: your name
 * @Date: 2020-11-27 17:32:27
 * @LastEditTime: 2020-12-08 16:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\api\home.ts
 */
import httpRequest, { ResponseData } from './index';
import { AxiosPromise } from 'axios';

//获取轮播图数据
export const getBannerData = (): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: 'get',
    url: '/tour/banner/get',
  });
};

//获取菜单数据
export const getMenuData = (data: any): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: 'get',
    url: '/tour/menu/list',
    params: data,
  });
};

//注册接口
export const registerSend = (data: any): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: 'post',
    url: '/tour/user/register',
    data,
  });
};

//登录接口
export const login = (data: any): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: 'post',
    url: '/tour/user/login',
    data,
  });
};

//最新文章模块
export const newArticleList = (data: any): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: 'get',
    url: '/tour/article/list',
    params: data,
  });
};
