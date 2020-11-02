import axios from 'axios'
import store from '@/store'
import router from '@/router'

const myAxios = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-TOKEN',
  withCredentials: true,
})

myAxios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    if (!error.response) {
      console.error(error.message)
    } else if (error.response.status === 401) {
      const resourceLocation = error.response.request.responseURL

      if(!resourceLocation.endsWith('/users/session')) {
        console.error('Unauthorized. Logging out')
        store.dispatch('auth/logout').finally(() => router.replace('/'))
      }
    } else if (error.response.status === 404) {
      console.error('Record not found. Redirecting to /')
      router.replace('/')
    }
    return Promise.reject(error)
  },
)

export default myAxios
