<template>
    <div>
        <div id="center-content">
		
		
            <!-- 메인 해더 -->
            <MainHeader/>
            
            <div id="loginForm">
                <form method="post" action="${pageContext.request.contextPath}/user/login">
                    <table>
                        <colgroup>
                            <col style="width: 100px;">
                            <col style="">
                        </colgroup>
                        <tr>
                            <td><label for="textId">아이디</label></td>
                            <td><input id="textId" type="text" name="id"></td>
                        </tr>
                        <tr>
                            <td><label for="textPassword">패스워드</label> </td>
                            <td><input id="textPassword" type="password" name="password"></td>   
                                        
                        </tr> 
                        <tr>
                            <td colspan="2" id="tdMsg" colespan="2">
                                <span>아이디 또는 비번을 확인해 주세요.</span>
                            </td>
                        </tr> 
                    </table>
                    <div id="btnArea">
                        <button class="btn" type="submit" >로그인</button>
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
    name: "LoginForm",
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