<template>
    <article class="container">
        <section class="swiper_container">
            <swiper
                :modules="modules"
                :loop="true"
                :autoplay="{delay:2500}"
                :centeredSlides="true"
                :spaceBetween="10"
                :slidesPerView="'auto'"
                :pagination="{
                    type: 'fraction'
                }"
            >
                <swiper-slide class="swiper_banner" v-for="(banner, i) in bannerImg" :key="i">
                    <img :src="`/images/banner/banner_${banner}.png`" alt="">
                </swiper-slide>
            </swiper>            
        </section>
        <section class="icons">
            <ul class="jcsb">
                <li><div class="icon_st"></div><span>회사소개</span></li>
                <li><div class="icon_invest"></div><span>투자가이드</span></li>
                <li><div class="icon_creator"></div><span>아티스트문의</span></li>
            </ul>
        </section>
    </article>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'Swiper'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const bannerImg = ['01','02','03','04','05','06','07'];
        return {
            bannerImg,
            modules: [ Autoplay, Pagination ]
        }
    }
}
</script>
<style>
    .swiper_banner{
        max-width: 300px;
    }
    .swiper-pagination-fraction{
        left: 80%;
        width: 35px;
        padding: 2px;
        border-radius: 2px;
        font-size: 10px;
        font-weight: bold;
        color: #fff;
        background: rgba(0,0,0,0.4);
    }
</style>
<style lang="scss" scoped>

.container{
    margin: 10px auto;
    section{
        padding: 3% 0;
        background: #fff;
    }
}
.swiper_banner{
    img{
        width: 100%;
    }    
}

.icons{
    ul{
        padding: 0 3%;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        li{
            & > div{
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            .icon_st{
                background: url('@/assets/images/icon/about_banner_sprite.png') 0 0/210px auto no-repeat, linear-gradient(137.46deg, #ff7092 10.8%, #aa24fd 88.44%);
                box-shadow: 0px 2px 4px rgba(179,44,243,.6);
            }
            .icon_invest{
                background: url('@/assets/images/icon/about_banner_sprite.png') -70px 0/210px auto no-repeat, linear-gradient(137.46deg, #708fff 10.8%, #7d1cf9 88.44%);
                box-shadow: 0px 2px 4px rgba(124,38,250,.6);
            }
            .icon_creator{
                background: url('@/assets/images/icon/about_banner_sprite.png') -140px 0/210px auto no-repeat, linear-gradient(137.46deg, #7af2aa 10.8%, #10bde3 88.44%);
                box-shadow: 0px 2px 4px rgba(27,195,222,.6);
            }
        }
    }
}

</style>