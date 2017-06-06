
require('./bootstrap');

import Vue from 'vue';
import router from './routes/router';

import ExampleComponent from './components/Example.vue';

const app = new Vue({
    router,
    el: '#app',
    components: {
        'example': ExampleComponent,
    }
});
