'use strict';
import axios from 'axios';
import config from './config';
 
 
//登录模块
export const requestLogin = params => { return axios.post(`/login`, params,config).then(res => res); };

// 功能权限表
export const getMenuList = params => { return axios.get(`/authority`, { params: params }).then(res => res); };

// list-a
export const getAlist = params => { return axios.get(`/a`, { params: params }).then(res => res); };

// list-b
export const getBist = params => { return axios.get(`/b`, { params: params }).then(res => res); };

// list-c
export const getClist = params => { return axios.get(`/c`, { params: params }).then(res => res); };