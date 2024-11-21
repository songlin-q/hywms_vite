<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style="height: 100%"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <span>基础信息</span>
        </template>
        <el-menu-item-group>
          <router-link :to="'/good'">
            <el-menu-item index="1-1">商品信息</el-menu-item>
          </router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="'/brand'">
            <el-menu-item index="1-2">品牌信息</el-menu-item>
          </router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="'/merchant'">
            <el-menu-item index="1-3">商户信息</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Van /></el-icon>
          <span>库存管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">库存列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-2">出库列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-3">入库列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">角色管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-2">菜单管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
    
    <script setup>
</script>
    
    <style scoped>
.aside {
  height: 100%;
}
</style>