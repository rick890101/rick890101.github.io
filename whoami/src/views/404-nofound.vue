<template>
    <div class="main">
        <el-col>
            <el-result icon="error" title="找不到的網頁" sub-title="HTTP_CODE: 404，沒有符合的網頁可供顯示。">
                <template #extra>
                    <el-button type="primary" @click="$router.go(-1)">返回前頁</el-button>
                </template>
            </el-result>
        </el-col>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
</style>