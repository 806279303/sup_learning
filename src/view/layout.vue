<template>
  <el-container>
    <el-header class="layout-header">
         <Header></Header>
    </el-header>
    <el-main class="layout-main">
         <router-view></router-view>
    </el-main>
    <el-footer class="layout-footer">
         <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from './header'
import Footer from './footer'

export default {
  name: "layout",
  components:{
     Header,Footer
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.layout-header,
.layout-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.layout-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>