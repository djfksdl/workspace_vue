<template>
    <div>
        <div id="center-content">
		
            <!-- 메인 해더 -->
            <MainHeader/>
            
            <div id="joinSucceess">		
                <p class="welcome-message">
                    <span> 감사합니다.<br>
                        회원 가입 및 블로그가 성공적으로 만들어 졌습니다.
                    </span>
                <br><br>
                <a href="${pageContext.request.contextPath}/user/loginForm">[로그인 하기]</a>
                </p>
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
    name: "JoinSuccess",
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