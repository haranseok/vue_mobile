<template>
    <div>
        <Headers />
        <Main />
        <FooterIcon />
    </div>
</template>

<script setup>
import Headers from '@/components/layout/Header.vue';
import Main from '@/pages/contents/Main.vue';
import FooterIcon from '@/components/layout/FooterIcon.vue';
</script>

<style lang="scss" scoped>
div{
    background: #F5F5F5;
    height: 2000px;
}
</style>