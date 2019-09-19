<template>
  <div>
    <el-container>
      <el-aside style="width:200px;">
        <layaside></layaside>
      </el-aside>
      <el-container>
        <el-header>
          <layHeader></layHeader>
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
import layAside from '../../components/home/lay-aside'
import layHeader from '../../components/home/lay-header'
export default {
  components: {
    'layaside': layAside,
    'layHeader': layHeader
  }
}
</script>

<style>
</style>
