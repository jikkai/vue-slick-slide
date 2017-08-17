import Vue from 'vue'
import SlickSlide from '../src'
import App from './App'

Vue.use(SlickSlide)

const app = new Vue({
  ...App
})

app.$mount('#app')
