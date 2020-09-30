import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/backend/axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

const requireVComponent = require.context('./components/V', false, /V[A-Z]\w+\.(vue|js)$/)

requireVComponent.keys().forEach(fileName => {
  const componentConfig = requireVComponent(fileName)
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')

  Vue.component(componentName, componentConfig.default)
})

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
