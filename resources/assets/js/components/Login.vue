<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login </div>

                    <div class="panel-body">

                        <div class="alert alert-danger" v-if="error.error">{{error.message}}</div>

                        <form method="post" @submit.prevent="login()" class="form">
                            <div class="form-group">
                                <label class="control-label">Email</label>
                                <input type="email" required autofocus v-model="user.email" class="form-control"/>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Senha</label>
                                <input type="password" required v-model="user.password" class="form-control"/>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueResource from 'vue-resource';
    import SessionStorage from '../services/session-storage';

    Vue.use(VueResource);

    export default {
        data(){
            return {
                user: {
                    email: '',
                    password: ''
                },
                error: {
                    error: false,
                    message: ''
                }
            }
        },
        methods: {

            login(){

                Vue.http.post('http://localhost:8000/api/login', this.user)
                    .then((response) => {
                        let $token = response.data.token;

                        if ($token) {
                            SessionStorage.set('token', $token);
                            this.$router.push({name: 'app'});
                        }
                    })
                    .catch((ResponseError) => {
                        this.error.error = true;
                        this.error.message = 'Login inválido';
                    });
            }
        }
    }
</script>