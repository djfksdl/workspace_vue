<template>
    <div>
        <div id="wrap">

            <AppHeader/>

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>회원</h2>
                    <ul>
                        <li>회원정보</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">
                
                    <div id="content-head">
                        <h3>로그인</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>회원</li>
                                <li class="last">로그인</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    <div id="user">
                        <div id="loginForm">
                            <form v-on:submit.prevent="login" action="" method="">

                                <!-- 아이디 -->
                                <div class="form-group">
                                    <label class="form-text" for="input-uid">아이디</label> 
                                    <input type="text" id="input-uid" name="" v-model="userVo.id" placeholder="아이디를 입력하세요">
                                </div>

                                <!-- 비밀번호 -->
                                <div class="form-group">
                                    <label class="form-text" for="input-pass">비밀번호</label> 
                                    <input type="text" id="input-pass" name="" v-model="userVo.password" placeholder="비밀번호를 입력하세요"	>
                                </div>

                                
                                <!-- 버튼영역 -->
                                <div class="button-area">
                                    <button type="submit" id="btn-submit">로그인</button>
                                </div>
                                
                            </form>
                        </div>
                        <!-- //loginForm -->
                    </div>
                    <!-- //user -->
                </div>
                <!-- //content  -->
                
            </div>
            <!-- //container  -->

            <AppFooter/>
            <!-- footer -->

        </div>
        <!-- //wrap -->
    </div>
</template>
<script>
import "@/assets/css/user.css"
import axios from 'axios'
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
    name: "LoginFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            userVo:{//보내기 전에 미리 묶어준다.
                id:"",
                password:""
            }
        };
    },
    methods: {
        login(){
            console.log("로그인");

            //console.log(this.userVo.id);
            //데이터모으기
            //서버전송

            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/users/login',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달->서버 컨트롤러에서 @ModelAttribute로 받고
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 ->서버 컨트롤러에서 @RequestBody로 받는다.
                responseType: 'json' //수신타입

            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data); //수신데이타 authUser->storage.js sata(){}안에 authUser에 저장시킬거임

                if(response.data.result == "success"){
                    //로그인 사용자 정보
                    let authUser = response.data.apiData;

                    //token: 응답문서의 Request header에 있음. "Authorization", "Bearer" +token -> 헤더에 있는거 꺼내서 storage.js sata(){}안에 token에 넣을 거임->그래서 일단 꺼내야함.
                    // "Authorization Bearer dsfwerlfksdf" 실제토큰이 이런 모양처럼 생김.-> 앞에 두부분은 헤더에 정확하게 있다. 그래서 우리는 마지막부분만 떼면 된다. 
                    const  token =response.headers.authorization.split(" ")[1]; //응답문서의. 헤더에. Authorization(이거는 앞에꺼가 단어가 정해져있어서메소드가 만들어져있다)를 빼고 Bearer dsfwerlfksdf까지 끊어줌. 그리고나서 공백으로 split해준다.거기서 2번째 방있는걸 골라야 dsfwerlfksdf이게 온다.-> 토큰값은 안바꿀거라 const로 선언!

                    //vuex(storage.js)에 저장
                    this.$store.commit("setAuthUser",authUser); //commit으로 넣을 수 있다.(키,값:payload)
                    this.$store.commit("setToken",token);

                    console.log(authUser);
                    console.log(token);
                    
                    //메인으로 이동
                    this.$router.push("/");

                }else{
                    console.log(response.data.message);
                    alert("아이디패스워드 확인")
                }

            }).catch(error => {
                console.log(error);
            });
        }

    },
    created(){}
 };
</script>

<style></style>