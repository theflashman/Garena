import axios from "axios"
export const getMenu = () => {
  const promise = new Promise((resolve, reject) => {
    const handler = function () {
      if (xhr.readyState !== 4) {
        return
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText) || {})
      } else {
        reject(new Error('请求失败'))
      }
    }
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/api/getMenu')
    xhr.responseType = 'json'
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onreadystatechange = handler
    xhr.send()
  })
  return promise
}

export const getImgList = () => {
  return axios({
    url: '/api/getImg',
    method: 'get'
  })
}