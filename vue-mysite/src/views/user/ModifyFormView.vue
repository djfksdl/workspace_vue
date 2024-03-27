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
                    <h3>회원정보</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>회원</li>
                            <li class="last">회원정보</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->

                <div id="user">
                    <div id="modifyForm">
                        <form v-on:submit.prevent="modifyUser" action="" method="">

                            <!-- 아이디 -->
                            <div class="form-group">
                                <label class="form-text" for="input-uid">아이디</label> 
                                <span class="text-large bold">{{ userVo.id }}</span>
                            </div>

                            <!-- 비밀번호 -->
                            <div class="form-group">
                                <label class="form-text" for="input-pass">패스워드</label> 
                                <input type="text" id="input-pass" name="password" v-model="userVo.password" placeholder="비밀번호를 입력하세요"	>
                            </div>

                            <!-- 이름 -->
                            <div class="form-group">
                                <label class="form-text" for="input-name">이름</label> 
                                <input type="text" id="input-name" name="name" v-model="userVo.name" placeholder="이름을 입력하세요">
                            </div>

                            <!-- //성별 -->
                            <div class="form-group">
                                <span class="form-text">성별</span> 
                                
                                <label for="rdo-male">남</label> 
                                <input type="radio" id="rdo-male" name="gender" value="male" v-model="userVo.gender"> 
                                
                                <label for="rdo-female">여</label> 
                                <input type="radio" id="rdo-female" name="gender" value="female" v-model="userVo.gender"> 

                            </div>

                            <!-- 버튼영역 -->
                            <div class="button-area">
                                <button type="submit" id="btn-submit">회원정보수정</button>
                            </div>
                            
                        </form>
                    
                    
                    </div>
                    <!-- //modifyForm -->
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
 import axios from 'axios'
 import "@/assets/css/user.css"
 import AppFooter from "@/components/AppFooter.vue";
 import AppHeader from "@/components/AppHeader.vue";     

 export default {
    name: "ModifyFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            userVo :{// 서버에서오는 return의 이름이랑은 안똑같아도됨.
                no:"",
                id:"",
                password:"",
                name:"",
                gender:""
            }
        };
    },
    methods: {
        getAuthUser(){//로그인한 사용자 정보 한명 가져오기
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/users/modify',
                headers: { "Content-Type": "application/json; charset=utf-8" ,
                            "Authorization": "Bearer " + this.$store.state.token //토큰은 헤더로 붙여서 보내니까 여기에 추가하면 됨. 형식 띄어쓰기하나라도 틀리면 안됨. 약속임. 로그인할때 값 vuex에 넣어놨으니(store.js) null값이 로그인했을때 값으로 들어가있다. 10:59
                }, //전송타입 + 토큰
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달-> 토큰만줄꺼라 params,data아무것도 안줘도 됨
                responseType: 'json' //수신타입
            }).then(response => {
                //data.apiData >userVo
                //토큰x,비로그인,변조
                if(response.data.result =="success"){
                    console.log(response); //수신데이타
                    this.userVo = response.data.apiData;
                }else{
                    console.log("토큰x,비로그인,변조");
                    this.$router.push("/user/loginform");
                    alert("로그인해주세요");
                }
            }).catch(error => {
                console.log(error);
            });
        },
        modifyUser(){
            console.log("수정하기");
            console.log(this.userVo);

            axios({//토큰 맨날 판단해야하니까 일괄로 연다. 사이트가 너무커서 글자하나라도 줄여야한다면 판단해서 빼기
                method: 'put', // put, post, delete 
                url: 'http://localhost:9000/api/users/modify',
                headers: { "Content-Type": "application/json; charset=utf-8",
                            "Authorization": "Bearer " + this.$store.state.token
                        }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log("response"+response); //수신데이타
                console.log("response.data: "+response.data); //수신데이타
                console.log("response.data.apiData: "+response.data.apiData); //수신데이타

                // let authUserName = this.userVo.name;//위에 넣은 값에서 name을 가져와도 되고,
                //let authUserName = response.data;//return값을 이름으로 받은걸로 넣을땐 요걸로 사용

                // if(authUserName !="fail"){
                //     // vuex의 이름을 변경
                //     this.$store.commit("setAuthName", authUserName);
    
                //     // console.log(authUserName);
    
                //     //메인으로 이동
                //     this.$router.push("/");

                // }else{
                //     //토큰오류
                //     //vuex token,authUser 삭제(변질되어서 또 쓸수가 없다.)
                //     this.$store.commit("setAuthUser", null);
                //     this.$store.commit("setToken", null);

                //     alert("로그인하세요");

                //     //메인으로 이동
                //     this.$router.push("/user/loginform");
                // }

                //JsonResult사용한 방법
                if(response.data.result == "success"){
                    console.log("result = success");
                    let name = response.data.apiData;//컨트롤러에서 보낸 값이 name이기 때문에 name이 apiData의 값이 된다. 

                    //vuex의 이름을 변경
                    this.$store.commit("setAuthName",name);

                    //메인으로 이동
                    this.$router.push("/");
                }else{
                    console.log("result = fail");
                    console.log(response.data.message);
                    this.$store.commit("setAuthUser",null);
                    this.$store.commit("setToken",null);
                }

            }).catch(error => {
                console.log(error);
            });

        }

    },
    created(){//메소드 자체는 위에서 만들고 여기서는 실행만 해주면 됨.
        this.getAuthUser();
    }
 };
 </script>


 <style></style>