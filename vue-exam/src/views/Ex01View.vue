<template>
    <h1>vue공부</h1>
    <h2>{{ subTitle }}</h2>
    <p>{{ content }}</p>
</template>
<script>
    export default{
        name: "Ex01View",
        components:{},
        data(){
            return {//객체형테이다.
                subTitle:"바인딩된 소제목", //필드(키):값
                content:"오늘은 수요일~"
            };
        },
        methods: {}
    };
</script>
<style></style>