<template>
  <header>
    <el-row>
      <el-col :span="6">
        <i class="el-icon-tickets"></i>
      </el-col>
      <el-col :span="12">
        <!-- <h2>自主学习监督社区网络系统</h2> -->
        <router-link to="/task" exact>任务</router-link>
        <router-link to="/social" exact>社区</router-link>
      </el-col>
      <el-col :span="4">
        <el-link type="primary" :underline="false" @click="toUser">欢迎您，超级管理员</el-link>
      </el-col>
      <el-col :span="2">
        <el-link type="info" :underline="false" @click="toLogin">退出</el-link>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
     name:'header',
     data(){
          return{

          }
     },
     methods:{
          toUser(){
               this.$router.push({path:'/user'})
          },
          toLogin(){
               this.$router.push({path:'/login'})
          },
     }
};
</script>

<style scoped>
header {
  width: 100%;
}
header .el-row {
  width: 100%;
}
.router-link a{
     width: 300px;
     background-color: aquamarine;
}
a{
     text-decoration: none;
}
.router-link-active {
  background-color: rgb(151, 123, 168);
  font-size: larger;
  color: aliceblue;
  text-decoration: none;
     height: 60px;
}
</style>