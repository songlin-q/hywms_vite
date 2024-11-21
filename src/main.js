import { createApp } from 'vue'

import App from './App.vue'
import './style.css'

import router from "../src/router/index";
//引入pinia
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import locale from 'element-plus/dist/locale/zh-cn.mjs' //如果是vite构建，引入部分会爆红，可以在vite-env.d.ts中declare一下 




import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/index.css'
import './assets/animation.css'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const store = createPinia()
store.use(piniaPluginPersist)
app.use(store)
app.use(ElementPlus, { locale })
app.use(router)


app.mount('#app')
