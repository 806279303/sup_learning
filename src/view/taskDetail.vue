<template>
     <div id="taskDetail">
          <div class="userImg">
               
          </div>
     
          <el-row>
               <div class="head-title">
                    这是标题
               </div>
          </el-row>

          <el-row class="d-row">
               <el-col :span="4" class="d-r-l">
                    创建者：
               </el-col>
               
               <el-col :span="20" class="d-r-r">
                    林小威
               </el-col>
          </el-row>

          <el-row class="d-row">
               <el-col :span="4" class="d-r-l">
                    创建时间：
               </el-col>
               
               <el-col :span="20" class="d-r-r">
                    2019-12-12 20:00:00
               </el-col>
          </el-row>

          <el-row class="d-row">
               <el-col :span="4" class="d-r-l">
                    结束时间：
               </el-col>
               
               <el-col :span="20" class="d-r-r">
                    2019-12-12 22:00:00
               </el-col>
          </el-row>

          <el-row class="d-row">
               <el-col :span="4" class="d-r-l">
                    任务标签：
               </el-col>
               
               <el-col :span="20" class="d-r-r">
                    英语、电脑、LOL、手速
               </el-col>
          </el-row>

          <el-row class="d-row">
               <el-col :span="4" class="d-r-l">
                    任务描述：
               </el-col>
               
               <el-col :span="20" class="d-r-r">
                    阿三打撒打撒撒旦撒旦撒大苏打大苏打撒旦阿斯顿飒飒大大是阿斯顿撒旦大苏打撒旦
               </el-col>
          </el-row>
     </div>
</template>

<script>
export default {
     name:'taskDetail',
     data(){
          return {
               id:null
          }
     },
     created(){
          this.getRouteParams()
     },
     methods:{
          getRouteParams(){
               const id = this.$route.params.id
               this.id = id
               console.log(id)
          }
     }
}   
</script>

<style >
#taskDetail{
     width: 100%;
     position: relative;
}
#taskDetail .userImg{
     position: absolute;
     right: 30px;
     top:20px;
     width: 100px;
     height: 100px;
     border-radius: 50%;
     box-shadow: 5px 5px 10px rgb(145, 145, 145);
     z-index: 99;
     background-color: aliceblue;
}
#taskDetail .head-title{
     text-align: center;
     font-size: 30px;
     font-weight: 800;
     color: rgb(51, 51, 51);
}
#taskDetail .d-row{
     width: 100%;
     box-sizing: border-box;
     padding:0 100px;
     /* background-color: rgb(255, 255, 255); */
     line-height: 50px;
}
#taskDetail .d-row .d-r-l{
     font-size: 17px;

}
#taskDetail .d-row .d-r-r{
     font-size: 20px;
}
</style>