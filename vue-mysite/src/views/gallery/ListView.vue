<template>
    <div>
        <div id="wrap">
            
            <AppHeader/>

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>갤러리</h2>
                    <ul>
                        <li><a href="">일반갤러리</a></li>
                        <li><a href="">파일첨부연습</a></li>
                    </ul>
                </div>
                <!-- //aside -->
                
                <div id="content">
                    <div id="content-head">
                        <h3>일반갤러리</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li class="last">일반갤러리</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    
                    <div id="gallery">
                        <div id="list">
                            <div v-if="this.$store.state.authUser !=null">
                                <button v-on:click="addImg" id="btnImgUpload">이미지올리기</button>
                            </div>
                            <div v-else></div>
                            <div class="clear"></div>

                            <ul id="viewArea">
                                <!-- 이미지반복영역 -->
                                <li v-bind:key="i" v-for="(galleryVo, i) in galleryList">
                                    <div class="view" >
                                        <img class="imgItem" v-on:click="selectImg(galleryVo.no)" v-bind:src="`http://localhost:9000/upload/${galleryVo.saveName}`">
                                        <div class="imgWriter">작성자: <strong>{{ galleryVo.name }}</strong></div>
                                    </div>
                                </li>
                                <!-- 이미지반복영역 -->
                            </ul>
                        </div>
                        <!-- //list -->
                    </div>
                    <!-- //	gallery -->

                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->

            <AppFooter/>

        </div>
        <!-- //wrap -->
        <!-- 이미지등록 팝업(모달)창 -->
        <div id="addModal" class=" modal" v-bind:class="{'modal-on':isDisplay}">
            <!-- v-bind:id는 없다. -->
            <div class="modal-content">
                <form v-on:submit.prevent="fileUpload" action="${pageContext.request.contextPath}/gallery/upload" method="post" enctype="multipart/form-data">
                    <div class="Modal-top">
                        <div class="closeBtn" v-on:click="closeImg">×</div>
                        <div class="m-header">이미지 등록</div>
                    </div>
                    <div class="m-body">
                        <div>
                        <label class="form-text">글작성</label> <input id="addModalContent" type="text" name="content" v-model="content">
                        </div>
                        <div class="form-group">
                        <label class="form-text">이미지선택</label> <input id="file" type="file" name="file" v-on:change="selectFile">
                        </div>
                    </div>
                    <div class="m-footer">
                        <button type="submit">등록</button>
                    </div>
                </form>
            </div>
        </div>
        
        
        <!-- 이미지보기 팝업(모달)창 -->
        <div id="viewModal" class="modal" v-bind:class="{'modal-on':isModal}" >
            <div class="modal-content">
                <div class="Modal-top">
                    <div class="closeBtn" v-on:click="closeImg">×</div>
                    <div class="m-header">이미지 보기</div>
                </div>
                <div class="m-body">
                    <div>
                    <img id="viewModelImg" v-bind:src="`http://localhost:9000/upload/${saveName}`">
                    <!--http://localhost:8880/mysite6/upload/17109315...jpg-->
                    <!-- ajax로 처리 : 이미지출력 위치-->
                    </div>
                    <div>
                    <p id="viewModelContent">{{content}}</p>
                    </div>
                </div>
                <div class="m-footer">
                    <input type="hidden" name="no" value="">
                    <button v-on:click="delModal(no)" type="button" id="deleteBtn">삭제</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import '@/assets/css/gallery.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
export default {
    name: "GalleryListView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            galleryList:[],
            isDisplay: false,
            isModal:false,
            content:"",
            file:"",
            saveName:"",
            no:""
        };
    },
    methods: {
        getImgList(){
            console.log("이미지리스트");
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/gallery',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.galleryList= response.data.apiData;

                // console.log(this.galleryList[0].name);
            }).catch(error => {
                console.log(error);
            });

        },
        addImg(){
            console.log("이미지 추가");
            this.isDisplay=true
        },
        selectFile(event){
            // console.log("셀렉트 파일");
            this.file = event.target.files[0]
        },
        fileUpload(){
            // console.log("이미지 업로드");

            //서비스 전송용 전용박스
            let formData = new FormData();
            formData.append("file",this.file);
            formData.append("content", this.content);
            formData.append("user_no",this.$store.state.authUser.no);

            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9000/api/gallery',
                headers: { "Content-Type": "multipart/form-data" }, //전송타입- form-data로 변경!
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: formData, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.isDisplay=false
                
                this.getImgList();
            }).catch(error => {
                console.log(error);
            });


        },
        closeImg(){
            this.isDisplay=false,
            this.isModal = false
        },
        selectImg(no){
            console.log("이미지 선택");

            this.isModal=true
            // console.log(no);

            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/gallery/'+no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: no, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response); //수신데이타

                this.saveName = response.data.apiData.saveName;
                this.content = response.data.apiData.content;
                this.no= response.data.apiData.no;
            }).catch(error => {
                console.log(error);
            });

        },
        delModal(no){
            console.log("델모달");
            console.log(no);

            axios({
                method: 'delete', // put, post, delete 
                url: 'http://localhost:9000/api/gallery/'+no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: no, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.isModal=false

                this.getImgList();

            }).catch(error => {
                console.log(error);
            });


        }

    },
    created(){
        this.getImgList();
    }
};
</script>
<style>



</style>