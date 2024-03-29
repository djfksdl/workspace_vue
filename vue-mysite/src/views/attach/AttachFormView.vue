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
                    <form v-on:submit.prevent="uploadFile" action="" method="post" enctype="multipart/form-data"><!--methid="post",enctype~써줬지만 prevent로 막은상태-> 밑에서 통신할때 post알려줘야함+ 헤더에 보내는 방식 추가해줘야함-->
                        <table>
                            <colgroup>
                                <col style="width: 600px;">
                                <col style="width: 220px;">
                            </colgroup>
                            <tr>
                                <td class="text-left">
                                    <label>이름</label>
                                    <input type="text" name="name" v-model="name">
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">
                                    <label>성별</label>
                                    <input type="text" name="gender" v-model="gender">
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left"><input v-on:change="selectFile" type="file" name="file"></td> <!--이 값이 바뀌는지 봐야함-> change 이벤트 걸어줌-->
                                <td class="text-right"><button type="submit">파일업로드</button></td>
                            </tr>
                        </table>
                    </form>
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
 import axios from "axios";
 import "@/assets/css/gallery.css"
 import AppHeader from "@/components/AppHeader.vue";
 import AppFooter from "@/components/AppFooter.vue";

 export default {
    name: "AttachFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            file:"",
            name:"",//양방향이니까 위에서 값이 들어오면 여기에 값이 ""->들어온 값으로 바뀐다.
            gender:""
        };
    },
    methods: {
        selectFile(event){
            console.log("파일선택");
            this.file = event.target.files[0] //기본이 배열이다. 그중에 하나만 선택하니까 files로 복수로 쓴다. 선택하면 여러방중에 하나가 생긴다. 0번째꺼 써야함.
           //파일이 들어갈때를 포착해서 그때 바로 가져와야하고 그 파일 자체를 가지고 있는것. 파라미터는 나중에 가져와도 된다.  
        },
        uploadFile(){
            console.log("파일업로드");

            //서버전송용 전용 박스
            let formData= new FormData();//파일이랑 글자들 같이 담을 수 있게 하는 객체 그릇을 만들어줌
            formData.append("file",this.file); //append가 put,push같은 역할임. 여기도 키와 값으로 보냄
            //->data로 보낸다.(json방식이 아니다: 얘만 예외임)
            formData.append("name", this.name);
            formData.append("gender", this.gender);

            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/attach',
                headers: { "Content-Type": "multipart/form-data" }, //전송타입:**멀티파트로 변경 - 파일은 글자가 아님. json으로 안보내고 위에 보내는 방식(enc~) 참고해서 바꿔줌.
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: formData, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data.apiData);
                let saveName = response.data.apiData;

                this.$router.push(
                    {
                        path:"/attach/result",
                        query:{saveName: saveName}//값이 여러개일수있으니 객체로 보낸다. 주소뒤에 붙어서 나온다.
                    }
                );

            }).catch(error => {
                console.log(error);
            });

        }
    },
    created(){}
 };
 </script>


 <style></style>