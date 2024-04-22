import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9002",
            // apiBaseUrl: "http://13.125.251.10:9002",


        };
    },
    mutations: {

        
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token']
        })
    ]

});