/*
 * @Author: your name
 * @Date: 2020-11-02 15:16:47
 * @LastEditTime: 2020-11-27 18:32:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test-app-umi3.x\typings.d.ts
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare namespace CommonTypes {
  interface BaseCompProps {
    style?: React.CSSProperties;
    className?: string;
  }
  type OnItemClick<T> = (item: T, index: number, evt: React.MouseEvent<HTMLElement>) => void;
  type Predicate<T> = (arg: T) => boolean;
  type FnCallback = (...args: []) => void;
  type ReadOnly<T> = {
    readonly [K in keyof T]: T[K] extends object ? ReadOnly<T[K]> : T[K];
  };
  type Partial<T> = {
    [K in keyof T]?: T[K] extends object ? Partial<T[K]> : T[K];
  };
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  type ParamType<T> = T extends (param: infer P) => any ? P : T;
  type Exclude<T, U> = T extends U ? never : T;
  // type Omit<T,K extends keyof any>=Pick<T,Exclude<keyof T,K>>

  /*********数据请求相关对象属性********* */
  type RequestMethod = 'GET' | 'PUT' | 'DELETE' | 'POST' | 'OPTIONS';
  type RequestOptionProps = {
    method?: RequestMethod;
    params?: object;
  };
  type RequestReturnProps<T> = Promise<
    CommonTypes.ResponsePagerProps<T> | CommonTypes.ResponseProps<T>
  >;
  type RequestProps<T> = (url: string, option?: RequestOptionProps) => RequestReturnProps<T>;
  interface ResponseProps<T = object> {
    readonly success: boolean;
    readonly errorCode: string;
    readonly errorMsg: string;
    readonly extraData?: object;
    readonly traceId?: string;
    readonly data: number | object | boolean | Array<T>;
  }

  export interface ResponsePagerProps<T = object> extends ResponseProps<T> {
    readonly data: {
      readonly list: Array<T>;
      ///旧版本
      // readonly total: number;
      // readonly current: number;
      ///新版本
      readonly totalItem: number;
      readonly currentPage: number;
      readonly pageSize: number;
    };
  }
}
