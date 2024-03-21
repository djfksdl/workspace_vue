<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <div class="box" v-bind:class="{'box-red': isRed, 'box-blue':isBlue, 'f-bold':isBold ,'f-big':isSize,'f-ita':isIta}">{{ boxText }}</div>
    <button type="button" v-on:click="redBox">빨간박스</button>
    <button type="button" v-on:click="blueBox">파란박스</button>
    <button type="button" v-on:click="boldOnOff">볼드on/off</button>
    <button type="button" v-on:click="sizeOnOff">크기on/off</button>
    <button type="button" v-on:click="itaOnOff">이텔릭체on/off</button>

    <br><br><br><br>
    <p style="font-size: 30px; color: #ff0000;">인라인 스타일로 태그에 스타일 직접 추가</p>
    
    <p v-bind:style="type">인라인 스타일로 태그에 스타일 직접 추가</p>
    <button type="button" v-on:click="changeType">인라인스타일 변경</button>
</template>
<script>
export default{
    name: "Ex04View",
    components:{},
    data(){
        return{
            title:"Vue공부",
            subTitle:"class속성 제어",
            boxText:"vue공부 재미있습니다.",
            isRed: false,
            isBlue: false,
            isBold: false,
            isSize: false,
            isIta: false,
            type:""
        }
    },
    methods:{ 
        redBox(){
            //console.log("빨강");
            this.isRed= true
            this.isBlue=false//빨간거 눌렀다가 파란거 누르면 적용되는데 다시 빨간거 넣으면 이미 red가 추가되어있는 상태라 변화가 없음. 뒤에 있는 css가 먹기때문에 파랑으로 가만히 있다. 빨강눌렀을때 파랑은 없애야한다.
        },
        blueBox(){
            this.isRed= false
            this.isBlue = true
        },
        boldOnOff(){
            //console.log("버튼");
            if(this.isBold == true){
                this.isBold = false
            }else{
                this.isBold = true
            }
        },
        sizeOnOff(){
            //console.log("사이즈")
            
            this.isSize = !this.isSize //원래 있는 상태에서 반대껄 넣어준다.if문 대신 요거 써도됨

            // if(this.isSize){// 자체가 true라서 '==ture' 없애도 됨.
            //     this.isSize = false
            // }else{
            //     this.isSize=true
            // }
        },
        itaOnOff(){
            console.log("이텔릭체");
            if(this.isIta ==true){
                this.isIta=false
            }else{
                this.isIta=true
            }
        },
        changeType(){
            console.log("클릭");
            this.type = "color:#0000ff; font-size:30px;"
        }
    }
}
</script>
<style>
    .box{
        width: 150px;
        border:1px solid #000;
    }
    .box-red{
        background-color: #ff0000;
    }
    .box-blue{
        background-color: #0000ff;
    }
    .f-bold{
        font-weight: bold;
    }
    .f-big{
        font-size: 20px;
    }
    .f-ita{
        font-style: italic;
    }
</style>