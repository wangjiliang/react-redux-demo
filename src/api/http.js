import axios from 'axios'
import Qs from 'qs'

// const BASE_URL = "http://localhost:8088" //上线的正式地址
const BASE_URL = "http://jsonplaceholder.typicode.com" 

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 50000
})

http.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

http.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject(response)
    }
    return Promise.resolve(response.data)
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log(401)
          break;
        case 403:
          console.log(403)
          break;
        case 404:
          console.log(404)
          break;
        case 500:
          console.log(500)
          break;
        default:
          break;
      }
    }
    return Promise.reject(error.response)
  }
)

function get(url, params = {}) {
  return http({
    url,
    method: 'GET',
    headers: {},
    params
  })
}

function post(url, data = {}) {
  return http({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data
  })
}

function put(url, data = {}) {
  return http({
    url,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: Qs.stringify(data)
  })
}

export default {
  get, post, put
}
