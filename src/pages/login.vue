<template>
  <el-row>
    <el-col :span="16">
      <div class="bg">
        <div class="bg-mask">
        </div>
        <div class="login-text">

          <div class="login-title">优质服务，追求卓越</div>
          <p class="login-sub">Amazing Stuff is Lorem Here.ICE Team</p>
        </div>
      </div>

    </el-col>
    <el-col :span="8">
      <div class="login-box">
        <div>
          <h4 class="form-title">登录</h4>
          <div class="form-box">
            <input
              type="text"
              class="login-input"
              placeholder="用户名"
            >
            <input
              class="login-input"
              placeholder="密码"
              type="password"
            >
            <div style="width: 100%">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </div>
            <el-button
              type="primary"
              round
              @click="login"
            >登录</el-button>
          </div>
        </div>
      </div>

    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('home')
    }
  }
}
</script>

<style scoped lang='css'>
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  height: 100vh;
  background-image: url(../assets/images/a508d48b5bc825e89a42da6c41afa22a.jpg);
  background-size: cover;
}
.bg-mask {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
}
.login-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
}
.login-title {
  margin-top: 60px;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.5;
  text-align: center;
  color: #fff;
}
.login-sub {
  margin-top: 30px;
  font-size: 16px;
  color: #fff;
}
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(255, 255, 255);
}
.form-title {
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  letter-spacing: 4px;
}
.form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-box >>> .el-button {
  margin-top: 40px;
  margin-bottom: 20px;
  width: 180px;
  background-color: #2077ff;
  height: 48px;
  text-align: center;
  border-radius: 50px;
  border: 0px;
  box-shadow: rgba(152, 22, 244, 0.19) 0px 5px 10px 2px;
}

.login-input {
  width: 320px;
  border: none;
  border-bottom: 1px solid rgb(235, 237, 242);
  padding: 0 12px;
  font-size: 14px;
  height: 30px;
  margin-bottom: 20px;
}

input.login-input::-webkit-input-placeholder,
textarea.login-input::-webkit-input-placeholder {
  color: #e0e0e0;
}

.login-input:focus,
.login-input:active {
  box-shadow: none;
  outline: none;
}
</style>
