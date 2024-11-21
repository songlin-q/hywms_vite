<template>
  <div @click="login">商品信息</div>
</template>
    
    <script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  console.log("login");
  router.push({
    path: "/login",
  });
};
</script>
    
    <style>
</style>