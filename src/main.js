/* eslint-disable semi */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui';
import './assets/style/theme/index.css';
import 'normalize.css';
import Axios from '../config/axios.config';
import store from './store'
Vue.use(elementUI);

Vue.config.productionTip = true;
Vue.prototype.$http = Axios;
Vue.prototype.bus = new Vue();
/* eslint-disable no-new */
Vue.filter('ssa', function (x, f) {
return f + 'aaaa' + x;
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
