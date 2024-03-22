<template>
    <div>
        <form action="" method="" v-on:submit.prevent="removeGuest">
            <table>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="password" name="password" v-model="password"></td>
                    <td><button type="submit">삭제</button></td>
                </tr>
            </table>
        </form>
	
	<br><br>
    <router-link to="/">메인리스트 이동</router-link>
	<!--<a href="">메인리스트 이동</a>-->
    </div>
 </template>


 <script>
 import axios from 'axios';
 export default {
    name: "DelFormView",
    components: {},
    data() {
        return {
            password: "",
            no: this.$route.params.no //router에서 주소에 :no로 들어가있기때문에 params.no로 꺼낼 수 있다. 
        };
    },
    methods: {
        removeGuest(){
            //console.log("삭제버튼");
            console.log(this.no);
            console.log(this.password);

            axios({
                method: 'delete', // put, post, delete 
                url: 'http://localhost:9000/api/guests/'+this.no,//no는 주소에 붙여서 보낸다.
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달: 당분간 json으로 쓸거임. 따라서 param안씀
                data: {password: this.password}, //put, post, delete 방식 자동으로 JSON으로 변환 전달- 하나만 보내더라도 객체모양{}으로 바꿔줘야함
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타

                this.$router.push({path:'/'})
                
                

            }).catch(error => {
                console.log(error);
            }); 


        }
    },
    created(){}
 };
 </script>


 <style></style>