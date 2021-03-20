import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // хранить данные
        message: 'hello vuex'
    },
    mutations: { // менять state
        setMessage (state, mes) {
            state.message = mes
        }
    },
    actions: { // менять state вызывая мутацию (нужно из-за ассинхронности данных)
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {  // забираем значения
        getMessage (state) {
            return state.message
        }
    }
})
