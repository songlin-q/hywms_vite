<template>
  <div class="header">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"
        ><div class="header-logo"><span>和易WMS</span></div></el-col
      >

      <el-col :span="4"
        ><div class="header-title">
          <el-link :underline="false">
            <el-icon><Refresh /></el-icon>
          </el-link>
          <el-link :underline="false">
            <el-icon><Setting /></el-icon>
          </el-link>
          <el-link :underline="false">
            <el-icon><SwitchButton /></el-icon>
          </el-link>

          <el-dropdown>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>更新日志</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>---
  <script setup>
</script>
  
  <style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  border-bottom: 1px solid #eee;
  z-index: 100;
  .row-bg {
    width: 100%;
    height: 100%;
    .header-logo {
      width: 100%;
      height: 100%;
      font-size: 2rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-title {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-title > * {
      margin-left: 2rem;
    }
  }
}
</style>