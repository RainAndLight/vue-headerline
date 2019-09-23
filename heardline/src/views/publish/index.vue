<template>
  <el-card>
    <bread-crumbs slot="header">
      <template slot="title">发布文章</template>
    </bread-crumbs>

    <el-form label-width="80px" class="form" style="margin:0 100px">
      <el-form-item label="标题">
        <el-input style="width:400px" placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <el-input type="textarea" :rows="10" placeholder="请输入内容"></el-input>
      </el-form-item>

      <el-form-item label="封面">
        <el-radio-group v-model="radio">
          <el-radio :label="3">单图</el-radio>
          <el-radio :label="6">三图</el-radio>
          <el-radio :label="9">无</el-radio>
          <el-radio :label="1">自动</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道">
        <el-select v-model="value" placeholder="请选择要发送的频道">
          <el-option v-for="item in channle" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">发布文章</el-button>
        <el-button>存入草稿</el-button>
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
</style>
