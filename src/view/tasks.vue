<template>
  <div id="task">
    <div class="task-header">
      <div class="task-header-l left">
        --本周最佳--
        <br />任务标题
      </div>
      <div class="task-header-r left">
        <div class="task-header-r-t" @click.prevent.native="toInsertTask">
          +
          <br />新建任务
        </div>
        <div class="task-header-r-b">
          --时长MAX--
          <br />任务标题
        </div>
      </div>
    </div>

    <div class="task-content">
      <div class="task-content-title">
        <el-row>
          <span>今日相关推荐</span>
        </el-row>
      </div>

      <div class="task-content-row" v-for="item in taskLists" :key="item.id">
        <el-row>
          <span class="t_c_r_title" @click="toTaskDetail(item.id)">{{item.title}}</span>
        </el-row>
        <el-row>
          <span class="dec">{{item.description}}</span>
        </el-row>
        <el-row class="pub_info">
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
  name: "tasks",
  data() {
    return {
      taskLists: [
        {
          id: 0,
          title: "这是标题1",
          description: "这是描述描述这是描述描述这是描述描述这是描述描述",
          publicName: "bowei"
        },
        {
          id: 1,
          title: "这是标题2",
          description: "这是描述描述这是描述描述这是描述描述这是描述描述",
          publicName: "bowei"
        }
      ]
    };
  },
  methods: {
    toInsertTask() {
      this.$router.push({ path: "/insertTask" });
    },
    toTaskDetail(id) {
      this.$router.push({
        name: "TaskDetail",
        params: {
          id
        }
      });
    }
  }
};
</script>

<style>
#task {
  width: 800px;
  margin: 0 auto;
  /* box-shadow: 5px 5px 15px #5a5a5a; */
  background-color: azure;
}
.task-header {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.task-header .task-header-l {
  width: 550px;
  height: 300px;
  background-color: #313131;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  text-align: center;
}
.task-header .task-header-r {
  width: 250px;
  height: 300px;
}
.task-header .task-header-r div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.task-header .task-header-r .task-header-r-t {
  width: 250px;
  height: 150px;
  background-color: rgb(245, 245, 245);
  /* line-height: 150px; */
  text-align: center;
  font-size: 20px;
  color: #313131;
  cursor: pointer;
}
.task-header .task-header-r .task-header-r-t:hover {
  background-color: rgb(235, 235, 235);
  font-size: 21px;
}
.task-header .task-header-r .task-header-r-b {
  width: 250px;
  height: 150px;
  background-color: rgb(145, 81, 187);
}
.task-content {
  width: 100%;
  border-top: 1px solid #bebebe;
}
.task-content .task-content-title {
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  padding-left: 10px;
  cursor: pointer;
  color: #3d3d3d;
}

.task-content-row {
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  padding: 15px 20px 16px 20px;
}
.task-content-row .t_c_r_title {
  /* font-size: 20px; */
  font-weight: bold;
  line-height: 30px;
  line-height: 24px;
  font-size: 18px;
  height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #3d3d3d;
  cursor: pointer;
}
.task-content-row .t_c_r_title:hover {
  color: #252525;
}
.task-content-row .dec {
  font-size: 15px;
  color: #707070;
  line-height: 25px;
}
.task-content-row .pub_info {
}
.publicer {
  float: left;
}
.publicer div {
  display: inline-block;
}
.publicer .pub_img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(216, 216, 216);
  vertical-align: middle;
  cursor: pointer;
}
.publicer .pub_name {
  vertical-align: middle;
  font-size: 14px;
  color: #444444;
  cursor: pointer;
}
.publicer .pub_name:hover {
  color: rgb(51, 153, 234);
  font-weight: 500;
}
.handles {
  float: right;
}
.handles div {
  display: inline-block;
  font-size: 14px;
  color: rgb(51, 153, 234);
  cursor: pointer;
}
.handles div:hover {
  color: rgb(33, 96, 148);
}
.handles .good {
  border-right: 1px solid #313131;
  padding-right: 5px;
}
.handles .comment {
  border-right: 1px solid #313131;
  padding-right: 5px;
}
</style>