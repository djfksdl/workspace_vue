<template>
    <div>
        <router-link to="/">
            <img class="logo" src="@/assets/images/logo.jpg">
        </router-link>
		<ul class="menu">
			<!-- 로그인 전 메뉴 -->
            <li><router-link to="/loginform">로그인</router-link></li>
            <li><router-link to="/joinform">회원가입</router-link></li>

			<!-- 로그인 후 메뉴 -->
			<!-- <li><a href="${pageContext.request.contextPath}/user/logout">로그아웃</a></li>
			<li><a href="">내블로그</a></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    name: "MainHeader",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>
<style></style>