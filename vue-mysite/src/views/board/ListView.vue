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
                        <div id="list">
                            <form action="" method="">
                                <div class="form-group text-right">
                                    <input type="text">
                                    <button type="submit" id=btn_search>검색</button>
                                </div>
                            </form>
                            <table >
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>글쓴이</th>
                                        <th>조회수</th>
                                        <th>작성일</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody v-bind:key="i" v-for="(boardVo,i) in boardList">
                                    <tr>
                                        <td>{{ boardVo.no }}</td>
                                        
                                        <td class="text-left"><router-link v-bind:to="`/board/read/${boardVo.no}`">{{ boardVo.content }}</router-link></td>
                                        <td>{{ boardVo.name }}</td>
                                        <td>{{ boardVo.hit }}</td>
                                        <td>{{ boardVo.reg_date }}</td>
                                        <td><a href="">[삭제]</a></td>
                                    </tr>
                                </tbody>
                            </table>
                
                            
                            <div>
                                <a id="btn_write" href="">글쓰기</a>
                            </div>
                            <div class="clear"></div>
                            <div>
                                <button id="btn_moreBoard" type="button">글 가져오기</button>
                            </div>
                            
                        </div>
                        <!-- //list -->
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
    name: "ListView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            boardList:[]
        };
    },
    methods: {
        getList(){
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.boardList=response.data.apiData;

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){
        this.getList();
    }
 };
 </script>
 <style></style>