
import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

//import jquery from 'jquery';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
