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
            
                <div id="content-head">
                    <h3>일반방명록</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>방명록</li>
                            <li class="last">일반방명록</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->

                <div id="guestbook">
                    <form v-on:submit.prevent="deleteGuest" action="" method="">
                        <table id="guestDelete">
                            <colgroup>
                                <col style="width: 10%;">
                                <col style="width: 40%;">
                                <col style="width: 25%;">
                                <col style="width: 25%;">
                            </colgroup>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password" name="password" v-model="password"></td>
                                <td class="text-left"><button type="submit">삭제</button></td>
                                <td><router-link to="/guest/addlist">[메인으로 돌아가기]</router-link></td>
                            </tr>
                        </table>
                        <input type='hidden' name="" value="">
                        <input type='hidden' name="" value="">
                    </form>
                    
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
 import AppHeader from "@/components/AppHeader.vue";
 import AppFooter from "@/components/AppFooter.vue";
 export default {
    name: "DeleteFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {

            password:"",
            no:this.$route.params.no
        };
    },
    methods: {
        deleteGuest(){
            console.log("삭제버튼");
            // console.log(this.no);

            axios({
                method: 'delete', // put, post, delete 
                url: 'http://localhost:9000/api/guests/'+this.no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: {password: this.password}, //@RequestBody는 @modelAttribute처럼 작동한다. 하나만 들어가도 Requestparam처럼 받는게 아니다! 이렇게 넣어도 setPassword로 알아서 넣어줌.디스패쳐가 받아서!
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.$router.push('/guest/addlist');
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){}
 };
 </script>
 <style></style>