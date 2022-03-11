import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.access_token}`
            console.log('hello', axios.defaults.headers.common['Authorization'])
        }
    },
    actions: {
        register({ commit }, credentials) {
            return axios.post('//localhost:8000/api/register', credentials)
            .then(({ data }) => {
                    commit('SET_USER_DATA', data)
                }
            )
            .catch(error => {
                console.log('error', error.response.data)
            })
        }
    }
})