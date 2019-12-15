<template>
  <div id="new-task">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="任务名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="任务类型">
           <el-col :span="24">
               <el-select style="width:100%" v-model="form.region" placeholder="请选择任务类型">
                    <el-option label="普通任务" value="shanghai"></el-option>
                    <el-option label="强制任务" value="beijing"></el-option>
               </el-select>
           </el-col>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否强制" style="text-align:left">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="任务标签" style="text-align:left">
        <el-checkbox-group v-model="form.type" style="display:inline-block">
          <el-checkbox label="英语" name="type"></el-checkbox>
          <el-checkbox label="考研" name="type"></el-checkbox>
          <el-checkbox label="看书" name="type"></el-checkbox>
          <el-checkbox label="做题" name="type"></el-checkbox>
        </el-checkbox-group>
        <el-button size="mini">+</el-button>
      </el-form-item>
      <el-form-item label="抵押物" style="text-align:left">
        <el-radio-group v-model="form.resource">
          <el-radio label="10积分"></el-radio>
          <el-radio label="20积分"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="任务描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "Editor",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
         this.$router.push({path:'/task'})
    },
    onCancel(){
         this.$router.push({path:'/task'})
    }
  }
};
</script>

<style scoped>
#new-task{
     
}
</style>