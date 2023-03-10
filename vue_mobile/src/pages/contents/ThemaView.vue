<template>
    <div class="container">
        <h2>테마별 추천곡</h2>
        <div class="imgList">
            <h4 class="sub_title">따뜻한 저작권료가 전해주는 봄이 오는 소식!</h4>
            <div class="swiper_container">
                <swiper
                    :modules="modules"
                    :autoplay="{delay:2500}"
                    :spaceBetween="20"
                    :slidesPerView="'auto'"
                    >
                    <swiper-slide v-for="(spring, i) in thema" :key="i">
                        <div class="spring_music">
                            <img :src="`/images/sections/section_${spring.img}.jpg`" alt="">
                        </div>
                    </swiper-slide>
                </swiper>            
            </div>
        </div>
        <div class="imgList">
            <h4 class="sub_title">저작권료 대비 현재가가 낮은 곡</h4>
        </div>
    </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'Swiper';
import 'swiper/css'
import ThemaData from '@/data/thema.json';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const thema = ThemaData;
        console.log(thema)
        return {
            thema,
            modules: [Autoplay]
        }
    }
}

</script>
<style>
    .swiper-slide{
        width: 100%;
        height: 100%;
        margin: 10px 0;
        max-width: 100px;
    }
@media screen and (min-width: 980px) {
    .swiper-slide{
        width: 100%;
        height: 100%;
        max-width: 150px;
    }

}
</style>
<style lang="scss" scoped>
.container{
    padding: 5% 2%;
    h4{
        margin: 12px 0;
        font-size: 1rem;
    }
}
.spring_music{
    img{
        width: 100px;
        border-radius: 50%;
    }
}
@media screen and (min-width: 980px) {
.container{
    padding: 5% 0;
}

.spring_music{
    img{
        width: 100%;
        border-radius: 50%;
    }
}
 
}
</style>