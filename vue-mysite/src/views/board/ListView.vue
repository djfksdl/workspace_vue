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
                                        <td v-if="this.$store.state.authUser !=null && this.$store.state.authUser.no == boardVo.user_no">
                                            <!-- 로그인 안되어있을때랑 no가 일치할때로 조건 설정해줘야 else일때 로그인 안될때 no를 비교하지 않음! 그래야 오류 안남! -->
                                            <button v-on:click="deleteBtn(boardVo.no)" type="button">[삭제]</button>
                                        </td>
                                        <td v-else></td>
                                    </tr>
                                </tbody>
                            </table>
                
                            
                            <div v-if="this.$store.state.authUser !=null">
                                <router-link to="/board/writeform" id="btn_write">글쓰기</router-link>
                                <!-- <a id="btn_write" href="">글쓰기</a> -->
                            </div>
                            <div v-else></div>

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
        //리스트 가져오기
        getList(){
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8"}, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                // console.log("현재 로그인한 no:"+this.$store.state.authUser.no); <-- 요거 로그인 안되있을때 주석처리 안되어있으면 오류남. 여기서부터 막히기 때문에 리스트 안불러옴 주의!
                // console.log("현재 로그인한 name:"+this.$store.state.authUser.name);

                this.boardList=response.data.apiData;
                // console.log("돌고있는 첫번째 게시판의 작성자no: "+this.boardList[0].user_no);

            }).catch(error => {
                console.log(error);
            });

            
        },
        //글삭제하기
        deleteBtn(no){
            // console.log("삭제!!!");
            console.log(no);

            axios({
                method: 'delete', // put, post, delete 
                url: 'http://localhost:9000/api/boards',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:no}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                //여기서 한개 보낸것만 삭제할 수 있는지? 아니면 등록이 아니면(unshift)같은거 없어서 리스트 불러와야하는지?
                //=>기획에 따라 다름. 나중에 '글 더보기'눌러서 펼쳐놨을때 리스트 불러오기로 하면, 다시 접히고 맨위로 가서 불편할 수 있음. 
                //해당 배열의 정보만 없애기 
        
                const index = this.boardList.findIndex(board => board.no === no);
                if (index !== -1) {
                    this.boardList.splice(index, 1);
                }

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