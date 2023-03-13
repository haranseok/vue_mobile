<template>
    <div>
        <Headers />
        <Main />
        <ThemaView />
        <BannerIcon />
        <RecommendAndRanking />
        <Footer />
        <FooterIcon />
    </div>
</template>

<script setup>
import Headers from '@/components/layout/Header.vue';
import Main from '@/pages/contents/Main.vue';
import ThemaView from '@/pages/contents/ThemaView.vue'
import BannerIcon from '@/pages/contents/BannerAndIcon.vue'
import RecommendAndRanking from './contents/RecommendAndRanking.vue';
import Footer from '@/components/layout/Footer.vue'
import FooterIcon from '@/components/layout/FooterIcon.vue';
</script>

<style lang="scss" scoped>
div{
    background: #F5F5F5;
}
</style>