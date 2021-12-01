import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from 'axios'
import './registerServiceWorker'
import { Button, Select, Radio, Header, Container, Main,
  Aside, Menu, MenuItem, Submenu, MenuItemGroup, 
  Dropdown, DropdownItem, DropdownMenu, Row, Col, Card,
  Table, TableColumn, Breadcrumb, BreadcrumbItem} from 'element-ui';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);


Vue.use(Button);
Vue.use(Select);
Vue.use(Radio);
Vue.use(Header);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.prototype.$http = http

if (process.env.NODE_ENV === 'development') require('@/api/mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
