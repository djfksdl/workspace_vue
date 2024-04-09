<template>
    <div>
        <div id="center-content">
		
            <!--메인 해더 자리 -->
            <MainHeader/>
		
            <form id="search-form">
                <fieldset>
                    <input type="text" name="keyword" >
                    <button id="btnSearch" type="submit" >검색</button>
                </fieldset>
                
                <fieldset>
                    <label for="rdo-title">블로그 제목</label> 
                    <input id="rdo-title" type="radio" name="kwdOpt" value="optTitle" > 
                    
                    <label for="rdo-userName">블로거 이름</label> 
                    <input id="rdo-userName" type="radio" name="kwdOpt" value="optName" > 
                </fieldset>
            </form>
            
            <div id="resultList">
                
                
            </div>
            
            <!-- 메인 푸터  자리-->
            <MainFooter/>
	
	
        </div>
        <!-- //center-content -->
    </div>
 </template>
 <script>
 import MainHeader from "@/components/MainHeader.vue"
 import MainFooter from "@/components/MainFooter.vue"
 export default {
    name: "MainIndex",
    components: {
        MainHeader,
        MainFooter
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
 };
 </script>
 <style></style>