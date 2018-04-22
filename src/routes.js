import Vue from 'vue';
import VueRouter from 'vue-router'; 
 
// login
const Login = r => require.ensure([], () => r(require('./pages/Login.vue')), 'Login'); // =>登录
 
Vue.use(VueRouter);
let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    

];
const router = new VueRouter({
    mode: 'history',
    routes
});
 

router.beforeEach((to, from, next) => {
    d 
    // 测试演示用
    next();
    
    
});
export default router;