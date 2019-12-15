<template>
  <el-container class="loginBox">
    <div id="login">
      <el-form ref="form" :model="form">
          <el-form-item style="text-align:center">
          <h2>自主学习监督社区网络系统</h2>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="primary" @click="onSubmit" class="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({path:'/task'})
      }
    }
  }
</script>

<style scoped>
.loginBox{
     background-color: #f1f1f1;
     width: 100%;
     height: 100vh;
}
#login{
     width: 500px;
     padding:30px 20px 20px 20px;
     position: absolute;
     left: 50%;
     margin-left: -250px;
     top:200px;
     border-radius: 10px;
     box-shadow: 5px 10px 20px #bdbdbd;
     background-color: rgb(245, 245, 245);
}
.onSubmit{
     width: 100%;
}
</style>