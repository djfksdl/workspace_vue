<template>
    <div>
        <h1>전화번호부</h1>

        <h2>수정폼</h2>

        <p>
            전화번호를 수정하려면<br>
            아래 항목을 기입하고 "수정" 버튼을 클릭하세요
        </p>

        <form v-on:submit.prevent="modify"  action="" method="">
            <div>
                <label>이름(name)</label>
                <input type="text" name="name" v-model="personVo.name">
            </div>
            
            <div>
                <label>핸드폰(hp)</label>
                <input type="text" name="hp" v-model="personVo.hp">
            </div>
            
            <div>
                <label>회사(company)</label>
                <input type="text" name="company" v-model="personVo.company">
            </div>
            
            <input type="text" name="personId" v-model="personVo.personId"><br>
            <button type="submit">수정</button>
            
        </form>

        <br><br>
        <router-link v-bind:to="`/`">리스트 이동</router-link>
    </div>
 </template>

 <script>
 import axios from 'axios';
 export default {
    name: "modifyFromView",
    components: {},
    data() {
        return {
            personVo:{
                name:"",
                hp:"",
                company:"",
                personId:this.$route.params.no
            },
            no:this.$route.params.no
        };
    },
    methods: {
        getPersonVo(){
            console.log("가져오기");
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/phonebooks/'+this.no,
                headers: { "Content-Type": "application/json; charset=utf-8"}, //전송타입 
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data);
                this.personVo = response.data
                
            }).catch(error => {
                console.log(error);
            });

        },
        modify(){
            console.log("수정버튼");
            axios({
                method: 'put', // put, post, delete 
                url: 'http://localhost:9000/api/phonebooks',
                headers: { "Content-Type": "application/json; charset=utf-8"}, //전송타입 
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.personVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.personVo = response.data;

                this.$router.push("/")
            }).catch(error => {
                console.log(error);
            });

        }
    },
    created(){
        this.getPersonVo()
    }
 };
 </script>

 <style></style>