<template>
    <div class="container">
        <h1 class="mt-2">Login</h1>
        <form @submit.prevent="entrar">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="E-mail" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" class="form-control" placeholder="Senha" v-model="user.senha">
            </div>
            <button type="submit" class="btn btn-success">Entrar</button>
            <div class="form-group">
                <router-link :to="{name:'usuario.novo'}">
                    Não possui cadastro? casdastre-se aqui!
                </router-link>
            </div>
            
        </form>
    </div>
</template>

<script>
import User from '../models/User'
import axios from 'axios'
export default {
    name:'Login',
    data() {
        return {
            user:new User()
        }
    },
    methods: {
        entrar() {
            console.log(this.user);
            axios.post('http://localhost:8000/auth/login', this.user)
            .then(res => {
                console.log(res);
                
            })
            .catch(e => console.log(e))
            
        }
    }
}
</script>

<style scoped>

</style>