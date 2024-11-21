<script setup>
import Header from "@/components/Layout/header.vue";
import Footer from "@/components/Layout/footer.vue";
import Aside from "@/components/Layout/aside.vue";
</script>

<template>
  <div class="app">
    <div class="header-app">
      <!-- 头部 -->
      <Header />
    </div>
    <div class="main-app">
      <div class="main-aside-app">
        <!-- 侧边栏 -->
        <Aside />
      </div>
      <div class="main-content-app">
        <!-- 内容区 -->
        <div class="main-content-body-app">
          <router-view :key="'/'"></router-view>
        </div>
        <!-- 页脚 -->
        <div class="main-content-footer-app">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .header-app {
    height: 7%;
  }
  .main-app {
    height: 93%;

    display: flex;
    .main-aside-app {
      width: 10%;
    }
    .main-content-app {
      width: 90%;

      .main-content-body-app {
        height: 92%;
        margin-left: 2%;
        margin-top: 1%;
      }
      .main-content-footer-app {
        height: 5%;
      }
    }
  }
}
</style>
