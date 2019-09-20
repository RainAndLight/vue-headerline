<template>
  <div class="login">
    <div>
      <el-card class="card">
        <!-- 头部 -->
        <div>
          <template>
            <div class="header" >
              <img src="../../assets/img/wd.png" alt="">
            </div>
          </template>
        </div>
        <!-- 表单 -->
        <el-form :model='loginFrom' :rules='loginRules'>
          <el-form-item prop='mobile' label="手机号">
            <el-input placeholder='请输入11位手机号' v-model='loginFrom.mobile' style="width:70%"></el-input>
          </el-form-item>
          <el-form-item prop='code' label="验证码">
            <el-input placeholder='输入6位验证码' v-model='loginFrom.code' style="width:30%"></el-input>
            <el-button type="primary" style="width:30%;margin-left:40px" >发送验证码</el-button>
          </el-form-item>
          <el-form-item prop='agree'>
            <el-checkbox v-model="loginFrom.agree">我已经阅读协议并同意</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginFrom: {
        mobile: '',
        code: '',
        agree: false
      },
      loginRules: {
        mobile: [{ required: true, message: '139，8个1 ，写吧' }, { pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, message: '手机号写的不对' }],
        code: [{ required: true, message: '验证码246810，写吧' }, { pattern: /^\d{6}$/, message: '请输入正确的6位验证' }],
        agree: [{ validator: function (rule, value, callBack) {
          value ? callBack('') : callBack('得勾选喔')
        } }]
      }
    }
  }
}
</script>

<style lang='less' soped>
.login {
  height: 100vh;
  background-image: url(../../assets/img/pic.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 440px;
    height: 330px;
    background-color: rgba(255,255,255,.2);
    .header {
      height: 50px;
      line-height: 50px;
      img {
        height: 40px;
        // width: 350px;
      }
    }
  }
}
</style>
