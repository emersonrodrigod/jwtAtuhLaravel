import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.map';
import SessionStore from '../services/session-storage';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if(!SessionStore.get('token') && to.meta.auth)
    {
        return router.push({name : 'login'});
    }

    next();
});
export default router;


