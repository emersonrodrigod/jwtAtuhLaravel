import App from '../components/App.vue';
import LoginComponent from '../components/Login.vue';


export default [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
        meta:{auth: false}
    },
    {
        path: '/',
        name: 'app',
        component: App,
        meta:{auth: true}
    }
];

