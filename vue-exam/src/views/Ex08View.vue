<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    

    <table border="1">
        <thead>
            <tr>
                <th>순번</th>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="personVo.no" v-for="(personVo, i) in pList" ><!--순번을 알고싶으면 i를 추가해줌. i는 이름 아무거나 넣어도됨 3:29-->
                <td>{{ i+1 }}</td>
                <td>{{ personVo.no }}</td>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
            </tr>
        </tbody>
    </table>

    <button type="button" v-on:click="getList">데이터 불러오기</button>

    <br><br>

    <span v-bind:key="i" v-for="(ageInfo, i) in radioAges">
        <label>{{ageInfo.text}}</label>
        <input type="radio" name="age" v-bind:value="ageInfo.code" v-model="aPicked">
        <!--얘는 왜 단방향,양방향 둘다씀? code는 우리가 바꾸는 값이 아니니까 .. aPicked는 계속 바뀌니까!-->
    </span>

</template>
<script>
export default{
    name: "Ex08View",
    components:{},
    data(){
        return{     
            title:"Vue공부",
            subTitle:"반복문",   
            pList:[], //처음에 빈화면 보이려면 빈값을 넣어주고, 나중에 메소드에서 값을 넣어주면 된다.
            aPicked:"30",
            radioAges:[{text:"10대",code:"10"},
                       {text:"20대",code:"20"},
                       {text:"30대",code:"30"},
                       {text:"기타",code:"etc"}
                    ]
        }
    },
    methods:{
        getList(){
            console.log("데이터 수신중.......");

            let personList = [
                {no: 1, name: "정우성", hp:"010-1111-1111", company:"02-1111-1111"},
                {no: 2, name: "이효리", hp:"010-2222-2222", company:"02-2222-2222"},
                {no: 3, name: "유재석", hp:"010-3333-3333", company:"02-3333-3333"}
            ];
            this.pList = personList;
        }
    },
    created(){//시작할때(라우터가 이 페이지를 생성할때!)
        this.getList(); //영역밖에꺼 부를때는 항상 this넣어주기
    }
}
</script>
<style>

</style>