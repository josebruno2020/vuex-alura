export const logoutMixis = {
    methods: {
        logout() {
            this.$store.commit('DESLOGAR_USUARIO');
            this.$router.push({name:'login'});
        }
    }
    
}