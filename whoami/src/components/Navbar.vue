<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="0" @click="$router.push('/')">ChanYu Rick: Whoami</el-menu-item>
        <el-menu-item index="1" @click="$router.push('name')">Name</el-menu-item>
        <el-menu-item index="2" @click="$router.push('info')">Info</el-menu-item>
        <el-menu-item index="3">Orders</el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style></style>