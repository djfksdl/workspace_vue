<template>
    <div>
        <div id="center-content">
		
            <!-- 메인 해더 -->
            <MainHeader/>

            <div>		
                <form id="joinForm" v-on:submit.prevent="join" method="post" action="${pageContext.request.contextPath}/user/join">
                    <table>
                        <colgroup>
                            <col style="width: 100px;">
                            <col style="width: 170px;">
                            <col style="">
                        </colgroup>
                        <tr>
                            <td><label for="txtId">아이디</label></td>
                            <td><input id="txtId" type="text" name="id" v-model="UserVo.id"></td>
                            <td><button id="btnIdCheck" type="button">아이디체크</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td id="tdMsg" colspan="2">사용할 수 있는 아이디 입니다.</td>
                        </tr> 
                        <tr>
                            <td><label for="txtPassword">패스워드</label> </td>
                            <td><input id="txtPassword" type="password" name="password"  v-model="UserVo.password"></td>   
                            <td></td>  			
                        </tr> 
                        <tr>
                            <td><label for="txtUserName">이름</label> </td>
                            <td><input id="txtUserName" type="text" name="userName"  v-model="UserVo.userName"></td>   
                            <td></td>  			
                        </tr>  
                        <tr>
                            <td><span>약관동의</span> </td>
                            <td colspan="3">
                                <input id="chkAgree" type="checkbox" name="agree" value="y">
                                <label for="chkAgree">서비스 약관에 동의합니다.</label>
                            </td>   
                        </tr>   		
                    </table>
                    <div id="btnArea">
                        <button id="btnJoin" class="btn" type="submit" >회원가입</button>
                    </div>
                    
                </form>
                
            </div>
            
            
            <!-- 메인 푸터  자리-->
            <MainFooter/>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import MainHeader from "@/components/MainHeader.vue"
import MainFooter from "@/components/MainFooter.vue"
export default {
    name: "JoinForm",
    components: {
        MainHeader,
        MainFooter
    },
    data() {
        return {
            UserVo:{
                id:"",
                password:"",
                userName:""
            }
        };
    },
    methods: {
        join(){
            console.log("회원가입 버튼")

            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/users/join',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: this.UserVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
            }).catch(error => {
                console.log(error);
            })
        }
    },
    created(){}
};
</script>
<style></style>