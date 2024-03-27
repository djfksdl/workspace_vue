<template>
    <div>
        <div id="wrap">

            <AppHeader/>

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>게시판</h2>
                    <ul>
                        <li><a href="">일반게시판</a></li>
                        <li><a href="">댓글게시판</a></li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">

                    <div id="content-head">
                        <h3>일반게시판</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>게시판</li>
                                <li class="last">일반게시판</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    <div id="board">
                        <div id="writeForm">
                            <form action="#" method="get">
                                <!-- 제목 -->
                                <div class="form-group">
                                    <label class="form-text" for="txt-title">제목</label>
                                    <input type="text" id="txt-title" name="" value="" placeholder="제목을 입력해 주세요">
                                </div>
                            
                                <!-- 내용 -->
                                <div class="form-group">
                                    <textarea id="txt-content"></textarea>
                                </div>
                                
                                <a id="btn_cancel" href="">취소</a>
                                <button id="btn_add" type="submit" >등록</button>
                                
                            </form>
                            <!-- //form -->
                        </div>
                        <!-- //writeForm -->
                    </div>
                    <!-- //board -->
                </div>
                <!-- //content  -->


            </div>
            <!-- //container  -->


            <AppFooter/>
        </div>
        <!-- //wrap -->
    </div>
 </template>
 <script>
 import '@/assets/css/board.css'
 import AppHeader from '@/components/AppHeader.vue'
 import AppFooter from '@/components/AppFooter.vue'

 export default {
    name: "WriteFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
 };
 </script>
 <style></style>