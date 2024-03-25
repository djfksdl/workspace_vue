import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {//state:값 - 여기가 데이터 넣는곳
        return {
            authUser: null,//여기서 값을 변경하려면 메소드를 만들어놔야함. 
            token: null
        };
    },
    mutations: {//여기가 methods:동작 - 여기쓰는 문법이 살짝 특이함.
        setAuthUser(state,payload){//payload는 아무거나 써도되는데 그냥 이거 씀
            state.authUser = payload;
        },
        setToken(state, payload){
            state.token = payload;//이렇게 쓰면 위에 data쪽에 들어간다. 값이
        }
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token'] //4:32-34 : authUser랑 token을 저장하라.
        })
    ]
});