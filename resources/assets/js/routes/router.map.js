import App from '../components/App.vue';
import LoginComponent from '../components/Login.vue';


export default [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/',
        name: 'app',
        component: App
    }
];

