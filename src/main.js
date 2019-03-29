import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElBigdataTable from './vue-element-bigdata-table/index.js';
Vue.use(ElementUI);
Vue.use(ElBigdataTable);

new Vue({
  el: '#app',
  render: h => h(App)
});
