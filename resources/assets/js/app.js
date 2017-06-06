
require('./bootstrap');

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
require('./services/interceptor');

import router from './routes/router';

const app = new Vue({
    router,
    el: '#app'
});
