<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <label>10대</label>
    <input type="radio" name="" value="">


</template>
<script>
export default{
    name: "Ex06View",
    components:{},
    data(){
        return{     
            title:"Vue공부",
            subTitle:"폼-selectbox:(양방향 바인딩)-> 폼에는 v-model 그냥 쓰자",      
            telecom:"sk" //여기에 쓰면 selected되어진다. 양방향임
        }
    },
    methods:{
        
    }
}
</script>
<style>

</style>