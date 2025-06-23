import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory } from 'vue-router'
//1.配置路由规则
const routes = [
  {path:"/home".componet:}
]
//2.创建路由器
const rounter = createRouter({
  history:createWebHistory(),//路由工作模式
  routes
})
//3.加载路由器
createApp(App).mount('#app')
