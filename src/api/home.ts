/*
 * @Author: your name
 * @Date: 2020-11-27 17:32:27
 * @LastEditTime: 2020-11-27 18:11:00
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
}
