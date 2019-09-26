import axios from 'axios'
import { Message } from 'element-ui';

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';
const config = {
  baseURL,
  timeout: 60000,
  headers: {
    'Content-type': 'application/json'
  },
  withCredentials:true
};

const instance = axios.create(config);

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  let { data } = response
  return data
}, error => {
    Message('请求失败，请稍后重试！')
    return Promise.reject(error)
})

// export default instance


// 进一步对get和post进行终极封装
function get(url, params) {
  return new Promise((resolve, reject)=>{
    instance.get(url, { params }).then(res => {
        resolve(res)
      })
      // .catch(err=>{
      //     console.log(err,'异常')
      // })
  })
}
// post请求
function post(url, params){
    return new Promise((resolve, reject)=>{
      instance.post(url, params).then(res => {
          resolve(res)
        })
        // .catch(err=>{
        //     console.log(err,'异常')
        // })
    })
}

export default {
  get,
  post
}
