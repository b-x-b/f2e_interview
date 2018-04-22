// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'

// routes
import router from './routes';

 // 全局api
import * as $API from './api/api';
Vue.prototype.$API =  $API;

 
// 创建路由实例
const router = new VueRouter({
	routes
})

// 创建 Vue 实例
new Vue({
  el: '#app',
  data(){
  	return {
  		
  	}
  },
  router,
  watch: {
  	// 监视路由，参数为要目标路由和当前页面的路由

  	}
  }
})

