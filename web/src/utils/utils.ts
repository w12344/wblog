/*
 * @Author: your name
 * @Date: 2020-11-30 15:40:07
 * @LastEditTime: 2020-12-02 16:11:36
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
  if (!/^(\w){6,20}$/.test(value)) {
    callback(`${msg}`);
  } else {
    callback();
  }
};

//密码验证
export const validateCheckPass = (msg: string, ruleForm: any) => (rule: any, value: any, callback: (val?: any) => void) => {
  if (!/^(\w){6,20}$/.test(value)) {
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
