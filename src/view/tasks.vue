<template>
     <div id="task">
          <div class="task-header">
               <div class="task-header-l left">

               </div>
               <div class="task-header-r left">
                    <div class="task-header-r-t"></div>
                    <div class="task-header-r-b"></div>
               </div>
          </div>

          <div class="task-content">
               <div class="task-content-row" v-for="item in taskLists" :key="item.id">
                    <el-row>
                         <h2>{{item.title}}</h2>
                    </el-row>
                    <el-row>
                         <span class="dec">{{item.description}}</span>
                    </el-row>
                    <el-row>
                         <div class="publicer">
                              <div class="pub_img"></div>
                              <div class="pub_name">{{item.publicName}}</div>
                         </div>
                         <div class="handles">
                              <div class="handles_block good">点赞 80</div>
                              <div class="handles_block comment">评论 80</div>
                              <div class="handles_block flowers">鲜花 5</div>
                         </div>
                    </el-row>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name:"tasks",
     data(){
          return {
               taskLists:[
                    {
                       title:'这是标题1',
                       description:'这是描述描述这是描述描述这是描述描述这是描述描述',
                         publicName:"bowei"
                    },     
                    {
                       title:'这是标题2',
                       description:'这是描述描述这是描述描述这是描述描述这是描述描述',
                         publicName:"bowei"
                    },     
               ],
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
#task{
     width: 800px;
     margin:0 auto;
     box-shadow: 5px 5px 15px #5a5a5a;
     background-color: azure;
}
.task-header{
     width: 100%;
     height: 300px;
     box-sizing: border-box;
     margin-bottom: 20px;
}
.task-header .task-header-l{
     width: 550px;
     height: 300px;
     background-color: #313131;
}
.task-header .task-header-r{
     width: 250px;
     height: 300px;
}
.task-header .task-header-r .task-header-r-t {
     width: 250px;
     height: 150px;
     background-color: aqua;
}
.task-header .task-header-r .task-header-r-b {
     width: 250px;
     height: 150px;
     background-color: rgb(145, 81, 187);
}

.task-content-row{
     width: 100%;
     margin-bottom: 10px;
     border-bottom: 1px solid #313131;
}
.publicer{
     float: left;
}
.publicer div{
     display: inline-block;
}
.publicer .pub_img{
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: darkgray;
     vertical-align: middle;
}
.publicer .pub_name{
     vertical-align: middle;
}
.handles{
     float: right;
}
.handles div{
     display: inline-block;
}
.handles .good{
     border-right: 1px solid #313131;
     padding-right: 5px;
}
.handles .comment{
     border-right: 1px solid #313131;
     padding-right: 5px;
}
</style>