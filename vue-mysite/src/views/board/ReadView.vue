<template>
    <div>
        <div id="wrap">

            <AppHeader/>

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>게시판</h2>
                    <ul>
                        <li><a href="">일반게시판</a></li>
                        <li><a href="">댓글게시판</a></li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">

                    <div id="content-head">
                        <h3>일반게시판</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>게시판</li>
                                <li class="last">일반게시판</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    <div id="board">
                        <div id="read">
                            <form action="#" method="get">
                                <!-- 작성자 -->
                                <div class="form-group">
                                    <span class="form-text">작성자</span>
                                    <span class="form-value">{{boardVo.name}}</span>
                                </div>
                                
                                <!-- 조회수 -->
                                <div class="form-group">
                                    <span class="form-text">조회수</span>
                                    <span class="form-value">{{boardVo.hit}}</span>
                                </div>
                                
                                <!-- 작성일 -->
                                <div class="form-group">
                                    <span class="form-text">작성일</span>
                                    <span class="form-value">{{boardVo.reg_date}}</span>
                                </div>
                                
                                <!-- 제목 -->
                                <div class="form-group">
                                    <span class="form-text">제 목</span>
                                    <span class="form-value">{{boardVo.title}}</span>
                                </div>
                            
                                <!-- 내용 -->
                                <div id="txt-content">
                                    <span class="form-value" >{{boardVo.content}}</span>
                                </div>
                                
                                <div v-if="this.$store.state.authUser.no == boardVo.user_no">
                                    <router-link to="/board/modifyform" id="btn_modify">수정</router-link>
                                </div>
                                <router-link id="btn_modify" to="/board/list">목록</router-link>
                            </form>
                            <!-- //form -->
                        </div>
                        <!-- //read -->
                    </div>
                    <!-- //board -->
                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->

            <AppFooter/>
        </div>
        <!-- //wrap -->
    </div>
 </template>
 <script>
 import axios from 'axios';
 import AppFooter from '@/components/AppFooter.vue';
 import AppHeader from '@/components/AppHeader.vue';

 export default {
    name: "ReadView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            no: this.$route.params.no,
            boardVo:{
                user_no:"",
                name:"",
                hit:"",
                reg_date:"",
                title:"",
                content:""
            }
        };
    },
    methods: {
        //하나의 글정보 가져오기
        getOneWrite(){
            // console.log(this.no);
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/boards/'+this.no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: {no:this.no}, //get방식 파라미터로 값이 전달 -간단한거 보내면 상관없음.
                // data: {no:this.no}, //put, post, delete 방식 자동으로 JSON으로 변환 전달 - 복잡한 리스트같은거 보낼때 좋음. 아니면 formData로 보내도됨.
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data.apiData);
                this.boardVo = response.data.apiData

            }).catch(error => {
                console.log(error);
            });

        }
    },
    created(){
        this.getOneWrite();
    }
 };
 </script>
 <style></style>