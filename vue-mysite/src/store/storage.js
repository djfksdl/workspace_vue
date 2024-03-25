import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {//state:값 - 여기가 데이터 넣는곳: ex) data(){}
        return {//여기부분은 저장소. 원래 여기부분은 한바퀴 돌아도 안사라짐, 대신 새로고침하면 없어지는데(초기화) pludgins에 써진건 디비에 저장이 됨. 브라우저의 디비에 저장됨. 새로고침하면 이부분은 다시 읽어서 계속 유지됨.
            authUser: null,//여기서 값을 변경하려면 아래 메소드를 만들어놔야함. 
            token: null//여기서 바로 값을 넣지 않고 밑에서 setter이용해서 넣음. 처음값은 null로~ // 토큰이 저장되어있어야 꺼내갈때 다시 색출할 수 있다.
        };
    },
    mutations: {//여기가 methods(){}:동작 - 여기쓰는 문법이 살짝 특이함.
        setAuthUser(state,payload){//state는 고정임.payload는 아무거나 써도되는데 보통 이거 씀 - 이 메소드 쓰는 방법 특이함(this.$store.commit("setAuthUser",authUser)이런식으로 (이름,데이터)여기 있는 메소드를 쓸 수 있다. )
            state.authUser = payload;//state는 위에 있는 'state(){}'를 뜻함. this를 따로 쓰지 않음! payload에다가 위에 넣고 싶은 값들을 써준다. 그래서 한묶음으로 던져준다(ex.이름,번호,비밀번호 등등 나열이 안되서 한묶음으로 던져줘야함.)
        },
        setToken(state, payload){
            state.token = payload;//이렇게 쓰면 위에 data()쪽에 들어간다. 값이
        }
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token'] //authUser랑 token을 브라우저 디비에 저장해놓은걸 자동으로 매칭시켜줌. 컴퓨터에 저장시킴.
        })
    ]
});