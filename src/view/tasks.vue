<template>
     <el-container>
          <el-button type="primary" circle @click="toInsertTask">+</el-button>
     </el-container>
</template>

<script>
export default {
     name:"tasks",
     data(){
          return {

          }
     },
     methods:{
          toInsertTask(){
               this.$router.push({path:'/insertTask'})
          }
     }
}
</script>

<style>

</style>