import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Notification } from '@arco-design/web-vue';

declare module 'axios' {
  export interface AxiosRequestConfig {
    /**
     * @description 设置为true，则会在请求过程中显示loading动画，直到请求结束才消失
     */
    hideLoading?: boolean;
  }
}

/**
 * 创建Axios实例
 */
const request: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_HOST, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});

/**
 * 请求前拦截
 * @param config AxiosRequestConfig
 * @returns AxiosRequestConfig
 */
const requestBefore = (config: AxiosRequestConfig) => {
  if (!config.hideLoading) {
    // loading
  }
  //
  if (config.headers && window.localStorage.token) {
    config.headers['Authorization'] = `Bearer ${window.localStorage.token}`;
  }
  return config;
};

/**
 * 请求出错处理
 * @param error
 * @returns
 */
const requestError = (error: any) => Promise.reject(error);

/**
 * 请求返回成功处理
 * @param response
 * @returns
 * 请求返回之后的预处理函数：若返回状态码为200，但实际请求未完成，将异常处理统一到错误处理
 * const responseAfter = (response: AxiosResponse) =>
 *   response.data.code === 200 ? response.data : Promise.reject(response);
 * 若项目接口无 response.data.success 状态字段，注释上一行，使用下行
 */
const responseAfter = (response: AxiosResponse) => Promise.resolve(response);

/**
 * 请求返回出错处理
 * @param error
 * @returns
 */
const responseError = (error: any) => {
  if (error && error.response) {
    checkStatus(error.response);
  }
  if (error.message.includes('timeout')) {
    // 判断请求异常信息中是否含有超时timeout字符串
    Notification.error({
      content: '请求超时',
      position: 'bottomRight',
    });
  }
  return Promise.reject(error);
};

interface codeMessageConfig {
  [code: number]: string;
}

// 状态码信息
const codeMessage: codeMessageConfig = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  // 401: '用户没有权限（令牌、用户名、密码错误）。',
  401: 'token已过期，请重新登录',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 检查状态
const checkStatus = (response: AxiosResponse) => {
  if (response.status >= 400) {
    const errorMessage = response.data.message || codeMessage[response.status];
    console.log(`请求错误 ${response.status}: ${errorMessage}`);

    Notification.error({
      content: `${response.status}: ${errorMessage}`,
      position: 'bottomRight',
    });
  }
};

// request interceptors configs
request.interceptors.request.use(requestBefore, requestError);
request.interceptors.response.use(responseAfter, responseError);

export default request;
