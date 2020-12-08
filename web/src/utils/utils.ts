/*
 * @Author: your name
 * @Date: 2020-11-30 15:40:07
 * @LastEditTime: 2020-12-08 17:23:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wBlog\src\utils\utils.ts
 */

//用户名验证
export const validateUsername = (msg: string) => (rule: any, value: any, callback: (val?: any) => void) => {
  if (!/^[a-zA-Z0-9_-]{4,16}$/.test(value)) {
    callback(`${msg}`);
  } else {
    callback();
  }
};

//密码验证
export const validatePass = (msg: string) => (rule: any, value: any, callback: (val?: any) => void) => {
  if (!/^(\w){5,20}$/.test(value)) {
    callback(`${msg}`);
  } else {
    callback();
  }
};

//密码验证
export const validateCheckPass = (msg: string, ruleForm: any) => (rule: any, value: any, callback: (val?: any) => void) => {
  if (!/^(\w){5,20}$/.test(value)) {
    callback(`${msg}`);
  } else {
    if (ruleForm.password !== ruleForm.checkPass) {
      callback(`两次输入的密码不一致`);
    } else {
      callback();
    }
  }
};

//手机号验证
export const checkPhone = (msg: string) => (rule: any, value: any, callback: (val?: any) => void) => {
  if (!/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(value)) {
    callback(`${msg}`);
  } else {
    callback();
  }
};

/**
 * 存储localStorage
 */
export const setStore = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) return;
  let data: any = window.localStorage.getItem(name);
  return typeof data !== 'string' ? data : JSON.parse(data);
};

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

export const getDateDiff = (dateTimeStamp: string) => {
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let now = new Date().getTime();
  let result = '';
  let diffValue = now - new Date(dateTimeStamp).getTime();
  if (diffValue < 0) {
    return;
  }
  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  if (monthC >= 1) {
    result = '' + parseInt(monthC.toString()) + '月前';
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC.toString()) + '周前';
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC.toString()) + '天前';
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC.toString()) + '小时前';
  } else if (minC >= 1) {
    result = '' + parseInt(minC.toString()) + '分钟前';
  } else result = '刚刚';
  return result;
};
