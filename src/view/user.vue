<template>
     <el-container>
          <el-aside class="userAside" width="200px">Aside</el-aside>
          <el-main class="userMain">Main</el-main>
     </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.userAside{
     background-color: rgb(139, 199, 196);
     color: #333;
     text-align: center;
     line-height: 200px;
}

.userMain {
     background-color: rgb(209, 218, 228);
     color: #333;
     text-align: center;
     line-height: 160px;
}
</style>