<template>
     <el-container>
          <el-aside class="userAside">
               <el-row v-for="(item, i) in userSide" v-bind:key="i" @click.prevent.native="toUserInterface(item)">
                    {{item}}
               </el-row>
          </el-aside>
          <el-main class="userMain">
               <router-view></router-view>
          </el-main>
     </el-container>
</template>

<script>
export default {
     name:'user',
     data(){
          return {
               userSide:['个人资料','我的成就','我的收藏','我关注的人','我的粉丝']
          }
     },
     methods:{
          toUserInterface(userSide){
               switch(userSide){
                    case '个人资料':this.$router.push({path:'/user/userInfo'});break;
                    case '我的成就':this.$router.push({path:'/user/userCollection'});break;
                    default : console.log('别点了真是');break;
               }
          }
     }
}
</script>

<style scoped>
.userAside{
     /* background-color: rgb(203, 209, 209); */
     color: #333;
     text-align: center;
     width: 200px !important;
     box-shadow: 5px 0px 10px rgba(0, 0, 0, .1);
}
.userAside .el-row{
     width: 100%;
     height: 60px;
     line-height: 60px;
     cursor: pointer;
     /* background-color: rgb(221, 223, 223); */
}
.userAside .el-row:hover{
     /* background-color: rgb(204, 204, 204); */
     line-height: 58px;
}

.userMain {
     background-color: rgb(209, 218, 228);
     color: #333;
     text-align: center;
}
</style>