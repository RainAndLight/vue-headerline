<template>
  <div>
    <el-container>
      <el-aside style="width:200px;background:#323745;overflow:hidden;">
        <lay-aside></lay-aside>
      </el-aside>
      <el-container>
        <el-header>
          <lay-header></lay-header>
        </el-header>
        <el-main style="padding:0;overflow:hidden;">
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

<style scoped>

</style>
