<template>
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <nav-bar-logado v-if="usuarioLogado"></nav-bar-logado>
        <nav-bar-deslogado v-else></nav-bar-deslogado>
      </div>
    </nav>
</template>

<script>
import NavBarLogadoVue from './NavBarLogado.vue';
import NavBarDeslogadoVue from './NavBarDeslogado.vue';
export default {
    name:'NavBar',
    
    computed: {
        usuarioLogado() {
            return Boolean(this.$store.state.token)
        }
    },
    components: {
        'nav-bar-logado':NavBarLogadoVue,
        'nav-bar-deslogado':NavBarDeslogadoVue
    }
}
</script>