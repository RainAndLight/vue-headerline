<template>
  <div class="header">
    <!-- 左 -->
    <div class="header-left">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </div>
    <!-- 右 -->
    <div class="header-right">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
        style="width:180px"
      ></el-input>
      <span>消息</span>
      <div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          超人不会飞
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less'>
.header {
  height: 50px;
  line-height: 50px;
  .header-left {
    float: left;
  }
  .header-right {
      display: flex;
      float: right;
    width: 380px;
    justify-content: space-between;
  }
}
</style>
