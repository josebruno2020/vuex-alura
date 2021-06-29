import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const state = {
    token:null,
    usuario:{},
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins:[vuexLocal.plugin],
});