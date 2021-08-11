import axios from "axios";
// import android from "android"

export function request(config) {
  // 这里不用default了
  // 1. 创建axios实例
  // instance的类型是AxiosInstance
  const instance = axios.create({
    baseURL: 'https://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
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
