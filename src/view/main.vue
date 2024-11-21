<template>
  <div @click="login">主页</div>
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