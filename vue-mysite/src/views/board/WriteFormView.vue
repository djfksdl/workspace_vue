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
                        <div id="writeForm">
                            <form v-on:submit.prevent="addWrite" action="#" method="get">
                                <!-- 제목 -->
                                <div class="form-group">
                                    <label class="form-text" for="txt-title">제목</label>
                                    <input type="text" id="txt-title" name="title" v-model="boardVo.title" placeholder="제목을 입력해 주세요">
                                </div>
                            
                                <!-- 내용 -->
                                <div class="form-group">
                                    <textarea id="txt-content" name="content" v-model="boardVo.content" ></textarea>
                                </div>
                                
                                <router-link id="btn_cancel" to="/board/list" >취소</router-link>
                                <button id="btn_add" type="submit" >등록</button>
                                
                            </form>
                            <!-- //form -->
                        </div>
                        <!-- //writeForm -->
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
 import '@/assets/css/board.css'
 import AppHeader from '@/components/AppHeader.vue'
 import AppFooter from '@/components/AppFooter.vue'

 export default {
    name: "WriteFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            boardVo:{
                user_no:this.$store.state.authUser.no,
                title:"",
                content:""
            }
        };
    },
    methods: {
        addWrite(){
            // console.log("등록할꺼!");
            // console.log(this.boardVo.no);
            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8"}, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.boardVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.$router.push('/board/list');
            }).catch(error => {
                console.log(error);
            });

        }
    },
    created(){}
 };
 </script>
 <style></style>