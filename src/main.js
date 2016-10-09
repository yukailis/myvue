import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import configRouter from './config-router'
import vueDirective from './vue-directive'
import vux from './vux-ui'
/* eslint-disable no-new */
//挂载
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(vux)
//实例化
var router=new VueRouter()
configRouter(router)
router.start(App,"app")
router.redirect({
	'/':'/index',
	'*':'/shouye'
})