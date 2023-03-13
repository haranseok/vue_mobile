<template>
    <article class="container">
        <h2>테마별 추천곡</h2>
        <section class="imgList">
            <h4 class="sub_title">따뜻한 저작권료가 전해주는 봄이 오는 소식!</h4>
            <div class="swiper_container">
                <swiper
                    :spaceBetween="20"
                    :slidesPerView="'auto'"
                    >
                    <swiper-slide v-for="(spring, i) in thema" :key="i" class="cycle_swiper">
                        <div class="spring_music">
                            <img :src="`/images/sections/section_${spring.img}.jpg`" alt="">
                            <div class="text_box">
                                <p>{{ spring.title }}</p>
                                <span>{{ spring.singer }}</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>            
            </div>
        </section>
        <section class="imgList">
            <h4 class="sub_title">저작권료 대비 현재가가 낮은 곡</h4>
            <div class="swiper_container">
                <swiper
                    :spaceBetween="20"
                    :slidesPerView="'auto'"
                    >
                    <swiper-slide v-for="(copy, i) in copyright" :key="i" class="cycle_swiper">
                        <div class="spring_music">
                            <img :src="`/images/sections/section_${copy.img}.jpg`" alt="">
                            <div class="text_box">
                                <p>{{ copy.title }}</p>
                                <span>저작권료 수익률</span>
                                <span class="revenue">{{ copy.revenue }}%</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>            
            </div>
        </section>
    </article>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'Swiper'
import 'swiper/css'
import ThemaData from '@/data/Thema.json';
import CopyRight from '@/data/Copyright.json'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const thema = ThemaData;
        const copyright = CopyRight;
        
        return {
            thema,
            copyright,
            modules: [ Autoplay, Pagination ]
        }
    }
}

</script>
<style>
    .swiper-slide{
        width: 100%;
        height: 100%;
    }
    
    .cycle_swiper{
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
    background: #fff;
    h4{
        margin: 12px 0;
        font-size: 0.9rem;
    }
}
.spring_music{
    img{
        width: 100px;
        border-radius: 50%;
    }
    .text_box{
        text-align: center;
        p{
            font-size: 14px;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &::before{
                color: rgba(0,0,0,0);
                content:'00';
                background:url('@/assets/images/badge_neigh.svg') no-repeat;
            }
        }
        span{
            display: block;
            color: #666;
            font-weight: bold;
            font-size: 12px;
        }
        .revenue{
            color:#ee495a;
        }
    }
}
@media screen and (min-width: 980px) {
.container{
    h4{
        font-size: 1rem;
    }
}

.spring_music{
    img{
        width: 100%;
        border-radius: 50%;
    }
    .text_box{
        p{
            font-size: 14px;
        }
        span{
            font-size: 14px;
        }
    }
}
 
}
</style>