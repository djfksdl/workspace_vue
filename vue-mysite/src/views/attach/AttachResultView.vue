<template>
    <div>
        <div id="wrap">

        <AppHeader/>


        <div id="container" class="clearfix">
            <div id="aside">
                <h2>갤러리</h2>
                <ul>
                    <li><a href="">일반갤러리</a></li>
                    <li><a href="">파일첨부연습</a></li>
                </ul>
            </div>
            <!-- //aside -->
            
            
            <div id="content">

                <div id="content-head">
                    <h3>첨부파일연습</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>갤러리</li>
                            <li class="last">첨부파일연습</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->
            
            
                <div id="file">
                    
                        <div>
                            <!-- 백틱: 문자열안에 변수로 인식할 수 있게 해줌. 그럼 +로 문자열이랑 변수랑 따로 안빼도됨. -->
                            <img id="resultImg" v-bind:src="`http://localhost:9000/upload/${this.$route.query.saveName}`"><!-- 주소를 /upload/ 배정하고 뒤에 파일명이 오면 c드라이브를 뒤지자는 설정을 해야함.-->
                            <!-- http://localhost:9000/upload/1711508093112e26ea34d-b825-4ae7-a618-839c0ea58b43.jpg  이렇게 uplaod/savaName을 치면 드라이브 뒤져서 사진 나옴 -->
                        </div>
                        <p>
                            <router-link id="btnUpload" to="/attach/form">다시 업로드하기</router-link>
                            <!-- <a id="btnUpload" href="">다시 업로드 하기</a> -->
                        </p>
                    
                </div>
                <!-- //file -->

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
 import "@/assets/css/gallery.css"
 import AppFooter from "@/components/AppFooter.vue";
 import AppHeader from "@/components/AppHeader.vue";
 
 export default {
    name: "AttachResultView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
 };
 </script>


 <style></style>