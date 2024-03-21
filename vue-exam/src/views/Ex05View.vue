<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <!-- form 전송은 클릭이벤트와 다르다 form에 submit 이벤트 -->
    <form v-on:submit.prevent="getPersonVo" action="" method="get"><!--주소를 안써도 다른 화면으로 넘어간다.-->
        <label for="uName">이름</label>
        <!-- <input id="uName" type="text" name="name" v-bind:value="name"> -->
        <input id="uName" type="text" name="name" v-model="personVo.name">
        <br>
        <label>전화번호</label>
        <input type="text" name="hp" v-model="personVo.hp"><!--양방향으로 바인딩. 그전까지는 단방향 바인딩이었음. value를 쓰지않아도 기본적으로 value를 인식함-->
        <br>
        <textarea name="content" v-model="personVo.content"></textarea>
        <br><br>
        <button type="button" v-on:click="setPersonVo">값쓰기</button>
        <button type="submit">값수정</button>
    </form>
</template>
<script>
export default{
    name: "Ex05View",
    components:{},
    data(){
        return{
            title:"Vue공부",
            subTitle:"폼-text,textarea:(양방향 바인딩)-> 폼에는 v-model그냥 쓰자!",
            personVo: {//연결되어있기때문에 form에서 get으로 넘기면 여기도 값이 바뀌어있음.
                name:"",
                hp:"",
                content:""
            },

            
            
        }
    },
    methods:{
        setPersonVo(){
            console.log("서버로부터 데이터를 받는중...");
            // this.name= "정우성"
            // this.hp="010-2222-2222"
            // this.content="영화배우 정우성입니다."
            let pVo={
                name:"정우성",
                hp:"010-2222-2222",
                content:"영화배우 정우성입니다."
            }
            // this.personVo.name = pVo.name; 하나씩 넣으면 양이 많아질때 힘드니까 한꺼번에 바꿔치기해주기
            this.personVo = pVo;

        },
        getPersonVo(){
            console.log("데이터 수집");
            // console.log(this.name);
            // console.log(this.hp);
            // console.log(this.content);

            console.log(this.personVo);
            //axios로 이제 보내면 됨.

        }
    }
}
</script>
<style>

</style>