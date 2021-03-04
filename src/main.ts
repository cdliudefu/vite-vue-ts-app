import { createApp } from 'vue'
import App from './App.vue'
// 数据中心
import store from './store';
//  路由
import router from './router';
import ant from './utils/ant';
// 引入全局样式
import 'vant/lib/index.css';
import 'lib-flexible/flexible'
import './utils/rem';

createApp(App)
.use(router)
.use(store)
.use(ant)
.mount('#app')
