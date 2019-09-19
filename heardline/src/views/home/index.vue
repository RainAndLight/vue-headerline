<template>
  <div>
    <el-container>
      <el-aside>
        <layaside></layaside>
      </el-aside>
      <el-container>
        <el-header>右侧头部</el-header>
        <el-main>
          右侧内容
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layAside from '../../components/home/lay-aside'
export default {
  components: {
    'layaside': layAside
  }
}
</script>

<style>
</style>
