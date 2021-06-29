<template>
    <div class="container">
        <h1 class="mt-2">Login</h1>
        <form @submit.prevent="entrar">
            <div class="alert alert-danger" v-if="msgDanger">{{msgDanger}}</div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="E-mail" v-model="user.email" @focus="msgDanger = ''">
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
export default {
    name:'Login',
    data() {
        return {
            user:new User(),
            msgDanger:''
        }
    },
    methods: {
        entrar() {
            this.$store.dispatch('efetuarLogin', this.user)
                .then(() =>this.$router.push({name:'gerentes'}))
                .catch(e => {
                    if(e.request.status  == 401) {
                        console.log(e)
                        this.msgDanger = 'E-mail ou senha inválidos!';
                    }
                });
            
        }
    }
}
</script>

<style scoped>

</style>