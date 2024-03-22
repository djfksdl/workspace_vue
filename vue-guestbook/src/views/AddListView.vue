<template>
    <div>
        <form v-on:submit.prevent="addGuest" action="" method="">
            <table border="1" width="540px">
                <tr>
                    <td>이름</td>
                    <td><input type="text" name="" v-model="guestbookVo.name"></td>
                    <td>비밀번호</td>
                    <td><input type="password" name="" v-model="guestbookVo.password"></td>
                </tr>
                <tr>
                    <td colspan="4"><textarea cols="72" rows="5" name="" v-model="guestbookVo.content"></textarea></td>
                </tr>
                <tr>
                    <td colspan="4"><button type="submit">등록</button></td>
                </tr>
            </table>
        </form>
        <br>
        <!--<button type="button" v-on:click="getList">데이터 가져오기- 주소 들어갈때 나오게 했으면 지워도됨</button>-->

        <div v-bind:key="i" v-for="(guestbookVo,i) in guestbookList">
            <table border="1" width="540px">
                <tr>
                    <td>[{{guestbookVo.no}}]</td>
                    <td>{{guestbookVo.name}}</td>
                    <td>{{guestbookVo.regDate}}</td>
                    <td>
                        <router-link v-bind:to="`/delete/${guestbookVo.no}`">삭제</router-link>
                        <!--<a href="">삭제</a>-->
                    </td>
                </tr>
                <tr>
                    <td colspan="4">{{guestbookVo.content}}</td>
                </tr>
            </table>
            <br><!--이것까지 반복되어야하기때문에 div로 한번 감싸준다. 원래는 css로 조절하는게 맞긴함!-->
        </div>

    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: "AddListView",
    components: {},
    data() {
        return {
            guestbookList:[], //[{},{},{}]하나하나씩 넣기 많으니까 빈 배열을 넣어주고 밑에서 한꺼번에 넣어준다.
            guestbookVo:{
                name: "", //빈걸로 연결해주고, 사용자가 적어주면 여기에 값이 들어온다. 그것이 양방향
                password:"",
                content:""
            }
        };
    },
    methods: {
        getList(){
            //console.log("클릭");
            //http://localhost:9000/api/guests

            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달: 당분간 json으로 쓸거임. 따라서 param안씀
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달- 리스트불러올때 보낼께 없어서 안씀
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                //data(){}에 넣어주면 화면과 연결되어있어서 쓸 수 있다!
                this.guestbookList = response.data; //한꺼번에 넣어주기

            }).catch(error => {
                console.log(error);
            });
        },
        addGuest(){
            console.log("저장");
            console.log(this.guestbookVo);

            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/guests',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달: 당분간 json으로 쓸거임. 따라서 param안씀
                data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달- data에 있는거 써줘야해서 this붙임
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //여기까지는 한명 수신데이타가 찍힘
                
                this.guestbookList.unshift(response.data);
                

            }).catch(error => {
                console.log(error);
            });          

            
        }
        
    },
    created(){//시작할때 가져오는 부분
        this.getList();

    }
};
</script>


<style></style>