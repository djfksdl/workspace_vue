<template>
    <div>
        
            <table  border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>핸드폰</th>
                        <th>회사</th>
                        <th>성별</th>
                    </tr>
                </thead>

                <tbody v-bind:key="i" v-for="(classVo, i) in classList">
                    <tr>
                        <td>{{ classVo.no }}</td>
                        <td>{{ classVo.name }}</td>
                        <td>{{ classVo.hp }}</td>
                        <td>{{ classVo.company }}</td>
                        <td>{{ classVo.gender }}</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
import axios from 'axios'
 export default {
    name: "ListView",
    components: {},
    data() {
        return {
            classList:[]
        };
    },
    methods: {
        getList(){
            // console.log("리스트 가져옴");
            axios({
                method: 'get', // put, post, delete 
                url: 'https://raw.githubusercontent.com/clz2024-red/api/main/person.json',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.classList = response.data
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
<style>
    table{
        text-align: center;
        border-collapse: collapse;
        border: 1px sold #000;
    }
    table thead{
        background-color: #d6d6d6;
    }
    table thead th:first-child{
        width: 40px;
    }
    table thead th:nth-child(2){
        width: 70px;
    }
    table thead th:nth-child(3){
        width: 150px;
    }
    table thead th:nth-child(4){
        width: 160px;
    }
    table thead th:last-child{
        width: 40px;
    }

</style>