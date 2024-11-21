<template>
  <div>
    <div class="login">
      <div class="left">
        <img src="../assets/act01-959.png" class="logo" alt="Vue logo" />
      </div>
      <div class="right">
        <div class="login-div">
          <div class="login-title">欢迎来到和易WMS！</div>
          <div class="login-form">
            <input type="text" placeholder="请输入账户名" />
            <input type="password" placeholder="请输入密码" />
            <div class="captcha-container">
              <input
                type="text"
                class="captcha-input"
                placeholder="输入验证码"
              />
              <img
                :src="codeUrl"
                alt="验证码图片"
                @click="changeCode"
                class="captcha-image"
              />
            </div>
            <button class="login-btn" @click="login">登录</button>
            <el-row>
              <el-button type="primary" style="margin-left: 3.3rem"
                >注册</el-button
              >
              <el-link type="primary" style="margin-left: 2rem"
                >忘记密码?</el-link
              >
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const baseURL = `${import.meta.env.VITE_BASE_API}`;
let codeUrl = ref("");
const router = useRouter();

const login = () => {
  console.log("login");
  router.push({
    path: "/",
  });
};
/**
 * 验证码图片单击事件
 */
const changeCode = () => {
  codeUrl.value = `${baseURL}/api/Auth/vCodeImg?deviceId=0&timestamp=${new Date().getTime()}`;
};
onMounted(() => {
  changeCode();
});
</script>

<style lang="scss" scoped>
.captcha-container {
  display: flex;
  width: 77.5%;
  border-radius: 4px;
  height: 15%;
  align-items: center;
  margin-left: 11.3%;
  background-color: #eeeeee;
}

.captcha-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin: 0 auto;
}

.captcha-image {
  width: 70px;
  height: 60%;
  cursor: pointer;
}
.logo {
  width: 99%;

  animation: header-effect 2s;
}
.login-btn {
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #5b9cff;
  background-color: #5b9cff;
  color: white;
  padding: 10px 20px;
  font-weight: 700;
  position: relative;

  transition: all 1s;
  z-index: 1;
  overflow: hidden;
  margin: 10px 0;
  height: 60px;
  width: 77%;
  line-height: 8px;

  &:hover {
    color: white;

    &::before {
      width: 180%;
    }
  }

  &::before {
    content: "";
    height: 100%;
    position: absolute;
    left: -30px;
    top: 0;
    background-color: #bad0f0ee;
    transform: skewX(45deg);
    width: 0%;
    transition: all 1s;
    z-index: -1;
  }
}
.login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #cadfff;

  display: flex;

  .left {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 40%;
    height: 100%;
    display: flex;

    align-items: center;
    .login-div {
      animation: header-effect 2s;
      width: 60%;
      height: 50%;
      background-color: white;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15),
        0 10px 10px rgba(0, 0, 0, 0.15);
      .login-form {
        height: 80%;
        text-align: center;
      }
      .login-title {
        font-size: 2rem;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  input {
    background: #eeeeee;
    border-radius: 4px;
    border: none;
    padding: 12px 15px;
    margin: 10px 0;
    width: 70%;
    height: 30px;
    outline: none;
  }
}
</style>