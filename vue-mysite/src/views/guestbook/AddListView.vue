<template>
    <div>
        <div id="wrap">

        <AppHeader/>

        <div id="container" class="clearfix">
            <div id="aside">
                <h2>방명록</h2>
                <ul>
                    <li>일반방명록</li>
                    <li>ajax방명록</li>
                </ul>
            </div>
            <!-- //aside -->

            <div id="content">
                
                <div id="content-head" class="clearfix">
                    <h3>일반방명록</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>방명록</li>
                            <li class="last">일반방명록</li>
                        </ul>
                    </div>
                </div>
                <!-- //content-head -->

                <div id="guestbook">
                    <form v-on:submit.prevent="addGuest"  action="" method="">
                        <table id="guestAdd">
                            <colgroup>
                                <col style="width: 70px;">
                                <col>
                                <col style="width: 70px;">
                                <col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><label class="form-text" for="input-uname">이름</label></th>
                                    <td><input id="input-uname" type="text" name="name" v-model="guestbookVo.name"></td>
                                    <th><label class="form-text" for="input-pass">패스워드</label></th>
                                    <td><input id="input-pass" type="password" name="password"  v-model="guestbookVo.password"></td>
                                </tr>
                                <tr>
                                    <td colspan="4"><textarea name="content" cols="72" rows="5"  v-model="guestbookVo.content"></textarea></td>
                                </tr>
                                <tr class="button-area">
                                    <td colspan="4" class="text-center"><button type="submit">등록</button></td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <!-- //guestWrite -->
                        <input type="hidden" name="action" value="add">
                        
                    </form>	
                    <div v-bind:key="i" v-for="(guestbookVo,i) in guestList">
                        <table class="guestRead">
                            <colgroup>
                                <col style="width: 10%;">
                                <col style="width: 40%;">
                                <col style="width: 40%;">
                                <col style="width: 10%;">
                            </colgroup>
                            <tr>
                                <td>{{ guestbookVo.no }}</td>
                                <td>{{ guestbookVo.name }}</td>
                                <td>{{ guestbookVo.reg_date }}</td>
                                <td><a href="">[삭제]</a></td>
                            </tr>
                            <tr>
                                <td colspan=4 class="text-left">방명록 글입니다. 방명록 글입니다.</td>
                            </tr>
                        </table>
                        <!-- //guestRead -->
                    </div>
                </div>
                <!-- //guestbook -->
            
            </div>
            <!-- //content  -->
        </div>
        <!-- //container  -->

        <AppFooter/>
        <!-- //footer -->
        </div>
        <!-- //wrap -->
    </div>
 </template>
 <script>
 import axios from "axios";
 import "@/assets/css/guestbook.css" 
 import AppHeader from '@/components/AppHeader.vue';
 import AppFooter from '@/components/AppFooter.vue';
 export default {
    name: "AddListView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            guestList:[],
            guestbookVo:{
                name:"",
                password:"",
                content:""
            }
        };
    },
    methods: {
        getList(){
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response); //수신데이타

                this.guestList = response.data.apiData;//JsonResult로 가져왔으니 apiData에 원하는 값이 들어있다.

            }).catch(error => {
                console.log(error);
            });
        },
        addGuest(){
            console.log("등록버튼");

            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.guestList.unshift(response.data.apiData);

                //추가후 입력창에 남아있는 데이터 지우기
                this.guestbookVo.name="";
                this.guestbookVo.password="";
                this.guestbookVo.content="";


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