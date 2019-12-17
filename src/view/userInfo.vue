<template>
     <div id="userInfo">
          <h1>个人资料</h1>
          <el-row class="userInfoHeader">
               <el-col :span="4">
                    <div class="userImg"></div>
               </el-col>
               <el-col :span="17" class="headerMid">
                    <el-row>
                         <el-col :span="24">
                              ID:weixin_37890936
                         </el-col>
                    </el-row>
                    <el-row>
                         <el-col :span="3">
                              关注 1
                         </el-col>
                         <el-col :span="3">
                              粉丝 1
                         </el-col>
                         <el-col :span="3">
                              积分 0
                         </el-col>
                    </el-row>
               </el-col>
               <el-col :span="3" class="headerRight">
                    个人主页
               </el-col>
          </el-row>
          <el-row class="userInfoContentRow">
               <el-col :span="8">呢称:Vai</el-col>
               <el-col :span="8">实名:Bovei</el-col>
               <el-col :span="8">性别:男</el-col>
          </el-row>
          <el-row class="userInfoContentRow">
               <el-col :span="8">生日:1998-11-19</el-col>
               <el-col :span="8">地区:中国 广东省 广州市</el-col>
               <el-col :span="8">行业:软件外包</el-col>
          </el-row>
          <el-row class="userInfoContentRow">
               <el-col :span="24">
                    简介:XXX这个人很懒,没有留下啊什么简介
               </el-col>
          </el-row>
     </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
#userInfo{
     width: 100%;
     text-align: left;
     padding-top: 1;
}
#userInfo h1{
     padding:0 0 20px;
}
.userImg{
     width: 80px;
     height: 80px;
     background-color: darkcyan;
     border-radius: 50%;
     box-shadow: 3px 3px 7px rgba(0, 0, 0, .5);
}
#userInfo .userInfoHeader{
     border-top: 1px solid #e0e0e0;
     border-bottom: 1px solid #e0e0e0;
     padding: 20px 0;
}
#userInfo .userInfoHeader .headerMid{
     margin-top: 10px;
}
#userInfo .userInfoHeader .headerRight{
     margin-top: 15px;
     font-size: 15px;
     cursor: pointer;
     text-decoration: underline;
     color: #8f8f8f;
}
#userInfo .userInfoContentRow{
     box-sizing: border-box;
     padding-left: 20px;
     line-height: 50px;
     font-size: 15px;
}
</style>