<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <form>
        <label>10대</label><input type="radio" name="age" value="10" v-model="picked">
        <label>20대</label><input type="radio" name="age" value="20" v-model="picked">
        <label>30대</label><input type="radio" name="age" value="30" v-model="picked">
        <label>기타</label><input type="radio" name="age" value="etc" v-model="picked">
        <p>당신의 나이는 {{ picked }}입니다.</p>

        <br><br><br>
        <label>독서</label><input type="checkbox" name="hobby" value="book" v-model="checked">
        <label>여행</label><input type="checkbox" name="hobby" value="trip" v-model="checked">
        <label>인사</label><input type="checkbox" name="hobby" value="hi" v-model="checked">
        <label>zZZ</label><input type="checkbox" name="hobby" value="sleep" v-model="checked">
        <p>선택한 취미는{{ checked }} 입니다.</p>
    </form>


</template>
<script>
export default{
    name: "Ex07View",
    components:{},
    data(){
        return{     
            title:"Vue공부",
            subTitle:"폼-radio:(양방향 바인딩)-> 폼에는 v-model 그냥 쓰자",      
            picked: "30",
            checked: ["book","hi"] //값이 여러개 선택될 수 있어서 하나라도 배열표시를 해야한다.
        }
    },
    methods:{
        
    }
}
</script>
<style>

</style>