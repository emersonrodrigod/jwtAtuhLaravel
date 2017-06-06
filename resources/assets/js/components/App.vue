<template>

    <div class="container">
        <h1>Olá! você está logado!</h1>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Id</th>
                <th>nome</th>
                <th>e-mail</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {

        data(){
            return {
                users: []
            }
        },
        methods: {
            list(){
                Vue.http.get('http://localhost:8000/api/users').then((response) => {
                    this.users = response.data.users;
                });
            }
        },

        created() {
            this.list();
        }
    };
</script>