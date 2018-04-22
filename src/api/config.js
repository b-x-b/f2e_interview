import axios from 'axios';
import Vue from 'vue';
import router from '../routes';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://10.211.1.9:8180/testing';
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
	const token = sessionStorage.getItem('token')
	if(token) {
		config.headers.Authorization = token;
	}
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
     if (response.responseCode === 403 || response.responseCode === 401) {
            
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}
            })
        } else {
            return response;
        }
 
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export defaults axios;