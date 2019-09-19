<template>
  <div class="login">
    <el-card class="box-card">
      <div class="title">
        <img class="img" src="../../assets/img/logo_index.png"/>
      </div>
      <!-- 第一步 绑定model   2. rules  规则  3. prop 校验   -->
      <el-form ref='myFrom' :model='loginFrom' :rules='loginRules'>
        <el-form-item prop='mobile'>
          <el-input v-model='loginFrom.mobile' placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input v-model='loginFrom.code' placeholder="请输入验证码" class="yanzhengma"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button type="primary" class="fsyzm">发送验证码</el-button>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item prop='agree'>
          <el-checkbox v-model='loginFrom.agree'>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" class="denglu" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      // 方法中传入的一个函数 两个校验蚕食 是否校验成功的字段和没有成功的字段
      this.$refs.myFrom.validate((isok) => {
        if (isok) {
          this.$axios({
            url: 'authorizations',
            method: 'post',
            data: this.loginFrom
          })
            .then(result => {
              console.log(result)
              // 存储token指令
              window.localStorage.setItem('token', result.data.data.token)
              this.$router.push('/home')
            })
            .catch(() => {
              // console.log(error.message)
              // 错误提示
              this.$message({
                message: '手机号 或者 验证码错误',
                type: 'warning'
              })
            })
        }
      })
    }
  },
  data () {
    return {
      loginFrom: {
        mobile: '',
        code: '',
        agree: false
      },
      loginRules: { // 规则的集合
        mobile: [{ required: true, message: '139，8个1 ，写吧' }, { pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, message: '手机号写的不对' }],
        code: [{ required: true, message: '验证码246810，写吧' }, { pattern: /^\d{6}$/, message: '请输入正确的6位验证' }],
        agree: [{
          validator: function (rule, value, callBack) {
            value ? callBack() : callBack(new Error('不得不选呐'))
          }
        }]
      }
    }
  }
}
</script>

<style lang="less" scoped>

.fsyzm {
  float: right;
}
.denglu {
  width: 100%;
  // padding-bottom: 20px;
}
.title {
  text-align: center;
}
.login {
  background-image: url(../../assets/img/login_bg.jpg);
  // height: 100vh;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 440px;
  height: 330px;
}
</style>
