<template>
  <el-card>
    <!-- header 为card中的 头部具名插槽 -->
    <bread-crumbs slot="header">
      <!-- title 面包屑插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumbs>
    <el-table :data="list">
      <el-table-column width="600px" prop="title" label="标题"></el-table-column>
      <el-table-column :formatter="formatter" align="center" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column align="center" prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column align="center" prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="obj">
          <el-button size="mini" type="text">修改</el-button>
          <el-button size="mini" type="text">{{obj.row.comment_status ? '打开评论' :'关闭评论' }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    formatter (row, column, cellValue, index) {
      // element-ui table表格 中不能显示 布尔值 所以用这个方法
      return cellValue ? '关闭' : '正常' //  （行信息，列信息，cellValue为判断布尔值，索引下标）
    },
    getComment () {
      this.$axios({
        url: '/articles',
        method: 'GET',
        params: { response_type: 'comment' } // 是路径参数
      }).then(result => {
        this.list = result.data.results
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
