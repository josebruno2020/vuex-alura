<template>
    <div class="container">
        <h1 class="mt-2">Novo Usuário</h1>
        <form @submit.prevent="cadastrar">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" class="form-control" placeholder="Nome" v-model="user.name" autofocus autocomplete="off">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="E-mail" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="password">Snha</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Senha" v-model="user.senha">
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
            <div class="form-group">
                <router-link :to="{name:'login'}">
                    Login
                </router-link>
            </div>
        </form>
        
    </div>
</template>

<script>
import User from '../models/User.js';
export default {
    name:'NovoUsuario',
    data() {
        return {
            user: new User()
        }
    },
    methods: {
        cadastrar() {
            this.$http.post('auth/register', this.user)
            .then(res => {
                console.log(this.user);
                this.user = new User();
                console.log(res)
                this.$router.push({name:'login'})
            })
            .catch(e => console.log(e))
           
        }
    }
}
</script>

<style scoped>

</style>