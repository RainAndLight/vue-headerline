<template>
  <div>
    <el-container>
      <el-aside style="width:200px;">
        <lay-aside></lay-aside>
      </el-aside>
      <el-container>
        <el-header>
          <lay-header></lay-header>
        </el-header>
        <el-main>
          右侧内容
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
