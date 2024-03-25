<template>
    <div>
        <h1>전화번호부</h1>

        <h2>리스트</h2>

        <p>등록된 전화번호 리스트입니다.</p>

            <table border="1">
                <colgroup>
                    <col style="width: 100px;">
                    <col style="width: 120px;">
                    <col style="width: 120px;">
                    <col style="width: 190px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>이름(name)</th>
                        <th>핸드폰(hp)</th>
                        <th>회사(company)</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>정우성</td>
                        <td>010-2222-2222</td>
                        <td>02-2222-2222</td>
                        <td>
                            <button type="button">삭제하기</button>&nbsp;&nbsp;
                            <!-- <router-link v-bind:to="`/delete/${guestbookVo.no}`">삭제</router-link> -->
                            <a href="">[수정폼이동]</a>
                        </td>
                    </tr>
                </tbody>	
            </table>
            <br>
        
        <a href="">등록폼 이동</a>
    </div>
</template>
<script>
export default {
   name: "listView",
   components: {},
   data() {
       return {};
   },
   methods: {

   },
   created(){}
};
</script>
<style></style>