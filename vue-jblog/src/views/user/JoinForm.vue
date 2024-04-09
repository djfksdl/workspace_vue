<template>
    <div>
        <div id="center-content">
		
            <!-- 메인 해더 -->
            <MainHeader/>

            <div>		
                <form id="joinForm" method="post" action="${pageContext.request.contextPath}/user/join">
                    <table>
                        <colgroup>
                            <col style="width: 100px;">
                            <col style="width: 170px;">
                            <col style="">
                        </colgroup>
                        <tr>
                            <td><label for="txtId">아이디</label></td>
                            <td><input id="txtId" type="text" name="id"></td>
                            <td><button id="btnIdCheck" type="button">아이디체크</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td id="tdMsg" colspan="2">사용할 수 있는 아이디 입니다.</td>
                        </tr> 
                        <tr>
                            <td><label for="txtPassword">패스워드</label> </td>
                            <td><input id="txtPassword" type="password" name="password"  value=""></td>   
                            <td></td>  			
                        </tr> 
                        <tr>
                            <td><label for="txtUserName">이름</label> </td>
                            <td><input id="txtUserName" type="text" name="userName"  value=""></td>   
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
import MainHeader from "@/components/MainHeader.vue"
import MainFooter from "@/components/MainFooter.vue"
export default {
    name: "JoinForm",
    components: {
        MainHeader,
        MainFooter
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>
<style></style>