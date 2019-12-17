<template>
     <el-container>
          <div id="s-content">
               <div class="s-row" v-for="item in sdata" :key="item.id">
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
     </el-container>
</template>

<script>
export default {
     name:"social",
     data(){
          return {
               sdata:[
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
               ]
          }
     }
}
</script>

<style scoped>
#s-content{
     width: 800px;
     margin:0 auto;
     /* background-color: aquamarine; */
}
.s-row{
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