<template>
  <el-card>
    <!-- header 为card中的 头部具名插槽 -->
    <bread-crumbs slot="header">
      <!-- title 面包屑插槽 -->
      <template slot="title">内容列表</template>
    </bread-crumbs>
    {{radio}}
    <el-form class="form">

      <el-form-item label="文章状态:">
        <el-radio-group v-model="radio">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">草稿</el-radio>
          <el-radio :label="3">待审核</el-radio>
          <el-radio :label="4">审核通过</el-radio>
          <el-radio :label="5">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道列表:">
        <el-form-item >
          <el-select v-model="value" placeholder="请选择要发送的频道">
            <el-option v-for="item in channle" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form-item>

      <el-form-item label="时间选择:">

      </el-form-item>

    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: 3,
      value: '',
      channle: []
    }
  },
  methods: {
    getChannel () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        // console.log(result)
        this.channle = result.data.channels
      })
    }
  },
  created () {
    this.getChannel()
  }
}
</script>

<style>
.form {
  margin-left: 20px;
}
</style>
