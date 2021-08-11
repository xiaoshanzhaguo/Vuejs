import axios from "axios";
// import android from "android"

export function request(config) {
  // 这里不用default了
  // 1. 创建axios实例
  // instance的类型是AxiosInstance
  const instance = axios.create({
    baseURL: 'https://123.207.32.32:8000',
    timeout: 5000,
    headers: {

    }
  })

  // 2. axios的拦截器 interceptors
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {// 这里看源码要传入两个参数
      console.log(config);
      // 1.比如config里面的信息不符合服务器的要求

      // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      // show

      // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息

      // 拦截config后，还要返回出去，不然内部没有config这个东西了
      return config
    }
  ,err => {
      console.log(err);
    });

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    // 只要 res.data
    return res.data
  }, err => {
    console.log(err);
  });

  // 3. 发送真正的网络请求
  return instance(config) // return 一个promise,本身返回的就是一个promise

  // android代码
  // 把android相关的代码包装到promise里，之后其他地方使用，也是按照正常的方式进行使用
  // return new Promise()
}


export function request(config) {
  return new Promise((resolve, reject) => {
    // 这里不用default了
    // 1. 创建axios实例
    const instance = axios.create({
      baseURL: 'https://123.207.32.32:8000',
      timeout: 5000
    })

    // 发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}


export function request(config) {
  // 这里不用default了
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'https://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config.baseConfig)
    .then(res => {
    // console.log(res);
    config.success(res)
  })
    .catch(err => {
    // console.log(err);
    config.failure(err)
  })
}

export function request(config, success, failure) {
  // 这里不用default了
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'https://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config)
    .then(res => {
      // console.log(res);
      success(res)
    })
    .catch(err => {
      // console.log(err);
      failure(err)
    })
}


function test(aaa, bbb) {
  // aaa('Hello World')
  bbb('err message')
}

test(function (res) {
  console.log(res);
}, function (err) {
  console.log(err);
})
