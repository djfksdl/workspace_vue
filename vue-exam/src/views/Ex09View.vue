<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <p v-if="age<20">당신은 미성년자입니다.</p>
    <p v-else-if="age>=20 && age<65">당신은 성인입니다.</p>
    <p v-else>당신은 노인입니다.</p>
    <div>
        <input type="date" v-model="selectedDate" >
        <p>선택한 날짜: {{ selectedDate }}</p>
    </div>


</template>
<script>
export default{
    name: "Ex09View",
    components:{},
    data(){
        return{     
            title:"Vue공부",
            subTitle:"if문",   
            age: 75,
            selectedDate: '', // 선택한 날짜를 저장할 데이터
        }
    },
    methods:{
        
    },
}
</script>
<style>

</style>