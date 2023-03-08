<template>
    <div>
        <Headers />
        <router-view></router-view>
    </div>
</template>

<script setup>
import Headers from '@/components/layout/Header.vue'
</script>

<style lang="scss" scoped>
div{
    height: 2000px;
}
</style>