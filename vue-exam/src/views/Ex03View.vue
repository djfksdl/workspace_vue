<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <p>{{ counter }}</p>
    <button v-on:click="minus" type="button">빼기(-)</button>
    <button v-on:click="plus" type="button">더하기(+)</button>

    <br>
    <br>

    <p>{{ message }}</p>
    <button v-on:click="setMessage" type="button">메세지 출력</button>
</template>
<script>

export default{
    name:"Ex03View",
    components:{},
    data(){
        return{
            title:"Vue공부",
            subTitle: "클릭이벤트+메소드",
            counter: 0,
            message: ""//연결관계 만들어주고,
        };
    },
    methods:{
        name, // 필드이름이랑 값이름이 같으면 줄여쓸 수 있다. 함수도 마찬가지
        plus() {//function이랑 앞에 필드이름이랑 줄일 수 있다. 위에 data(){}안에 있는 값도 마찬가지다.
            //console.log("클릭");
            this.counter++;//data에 있는 counter를 공략
        },
        minus:function minus(){
            //console.log("빼기");
            this.counter--;// this.counter=this.counter-1 /this.counter-=1로 써도 됨
        },
        setMessage(){
            //console.log("메세지출력");
            this.message = "동해물과 백두산이";//data에서 꺼내씀
        }
    },
};
</script>
<style></style>