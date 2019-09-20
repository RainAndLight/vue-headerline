<template>
  <el-row type="flex" class="header-left" justify="space-between">
    <!-- 左 -->
    <el-col :span="6" class="headerLeft">
      <i class="el-icon-s-unfold"></i>
      <span>小宫脱口秀</span>
    </el-col>
    <!-- 右 -->
    <el-col :span="8" class="headerRight">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" style="width:180px"></el-input>
      <span>消息</span>
      <div>
        <el-avatar :src='!userInfo.photo?userInfo.photo: defaultImg'></el-avatar>
      </div>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link" >
          {{userInfo.name}}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item class="clearfix" command="a">个人信息</el-dropdown-item>
          <el-dropdown-item class="clearfix" command="b">github地址</el-dropdown-item>
          <el-dropdown-item divided command="c">退出账户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'b') {
        location.href = 'https://github.com/RainAndLight/vue-headerline.git'
      } else if (command === 'c') {
        localStorage.clear()
        this.$router.push('/login')
      }
    },
    getUserInfo () {
      let token = window.localStorage.getItem('token')
      this.$axios({
        url: '/user/profile',
        headers: { Authorization: `Bearer ${token}` }
      }).then(result => {
        console.log(result)
        this.userInfo = result.data.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less'>
.headerLeft {
  display: flex;
  align-items: center;
}
.headerRight {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
