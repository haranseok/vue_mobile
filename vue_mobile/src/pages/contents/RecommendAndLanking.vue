<template>
    <article class="container">
        <section class="recommend">
            <h2>취향 추천 곡</h2>
            <swiper
                :loop="true"
                :slidesPreView="auto"
                :spaceBetween="10"
            >
                <swiper-slide class="swiper_recommend" v-for="(rec, i) in data" :key="i">
                    <div class="img_box">
                        <img :src="`/images/recommend/recommend_${rec.img}.jpg`" alt="">
                    </div>
                    <div class="info">
                        <p>{{ rec.title }}</p>
                        <span>{{ rec.singer }}</span>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="blur">
                <strong><span>음악 취향 분석,</span> <br/> 놓쳐도 괜찮으시겠어요? </strong>
                <v-btn 
                    prepend-icon="mdi-plus"
                    rounded="pill"
                >취향 추가하기</v-btn>
            </div>           
        </section>
        <section class="lanking">
            <h2>뮤카차트 top 5</h2>
        </section>
    </article>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import recommendData from '@/data/Recommend.json';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup(){
        const data = recommendData;
        return{
            data
        }
    }        
}
</script>
<style>
.swiper_recommend {
    max-width: 104px;
}

@media screen and (min-width: 940px) {
    .swiper_recommend {
        max-width: 128px;
    }
}
</style>
<style lang="scss" scoped>
.container{
    margin-bottom: 2%;
    section{
        padding: 5% 2%;
        background: #fff;
        h2{
            margin-bottom: 2%;
            text-transform: uppercase;
        }
    }
    .lanking{
        margin-top: 10px;
    }
}
.swiper_recommend{
    .img_box{
        width: 100%;
        img{
            width: 100%;
            border-radius: 3px 34px 34px 34px;
        }
    }
    .info{
        p{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 1rem;
            font-weight: bold;
        }
        span{
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.85rem;
        }
    }
}
.recommend{
    position: relative;
    .blur{
        position: absolute;
        top: 25%;
        left: 0;
        width: 100%;
        padding: 8% 0;
        text-align: center;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, #fff 81.25%);
        z-index: 99;
        strong{
            display: block;
            margin-bottom: 10px;
            font-size: 0.95rem;
            span{
                color: #ee495a;
            }
        }
        .v-btn{
            color: #fff;
            font-weight: bold;
            background: linear-gradient(96.44deg, #f244ab 19.33%, #ee495a 79.31%);
        }    
    }
}
</style>