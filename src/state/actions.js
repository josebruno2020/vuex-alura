import http from '../http'

const actions = {
    efetuarLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario).
            then((res) => {
                commit('DEFINIR_USUARIO', {
                    token:res.data.access_token,
                    usuario:res.data.user
                });
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }
};

export default actions;