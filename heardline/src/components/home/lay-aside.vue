<template>
  <div class="aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>

    <el-menu
      style="width:201px;"
      :router="true"
      background-color="#323745"
      text-color="#adafb5"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index='1'>
        <template slot="title">
          <i class="el-icon-s-comment"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">
          <span>发布文章</span>
        </el-menu-item>
        <el-menu-item index="/contentList">
          <span>内容列表</span>
        </el-menu-item>
        <el-menu-item index="/home/comment">
          <span>评论列表</span>
        </el-menu-item>
        <el-menu-item index="/home/material">
          <span>素材列表</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index='2'>
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="/home/fansInfo">
          <span>图文数据</span>
        </el-menu-item>
        <el-menu-item index="/home/fans">
          <span>粉丝概况</span>
        </el-menu-item>
        <el-menu-item index="/home/fansPic">
          <span>粉丝画像</span>
        </el-menu-item>
        <el-menu-item index="/home/fansList">
          <span>粉丝列表</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item-group>
        <el-menu-item index="/home/account">
          <i class="el-icon-setting"></i>账户信息
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.aside {
  height: 100vh;
  width: 200px;
  background-color: #323745;
  .title {
    background-color: #2e2f32;
    text-align: center;
    img {
      height: 30px;
      margin: 20px 0;
    }
  }
}
</style>
