import { api1 } from './index';
import { request } from '../utils/request';

export function queryDept(){
  return request({url:`${api1}/boat/read/qrCode`,method:'GET'})
}

export function queryTs(params){
  return request({url:`${api1}/checklist/read/ts/${params}`,method:'GET'})
}

export function queryBase(params){
  return request({url:`${api1}/boat/read/base?boatName=${params}`,method:'GET'})
}

export function querySave(data){
  return request({url:`${api1}/checklist/save/base64`,data})
}

export function queryRead(data){
  return request({url:`${api1}/checklist/read/list`,data})
}

export function queryDetail(params){
  return request({url:`${api1}/checklist/read/detail/${params}`,method:'GET'})
}


// 获取sessioncKey_openID
export function code2Session (jsCode){
  return request({url:`${api1}/app/auth/session/${jsCode}`,method:'GET'})
}


// 授权注册
export function saveUserInfo (data){
  return request({url:`${api1}/app/auth/check/user`,data})
}

// 
export function checkPhone (phone){
  return request({url:`${api1}/app/auth/check/${phone}`,method:'GET'})
}