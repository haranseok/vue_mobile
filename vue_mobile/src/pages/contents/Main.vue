<template>
    <div>        
        <swiper 
            :modules="modules" 
            :pagination="{ clickable: true }" 
            :allow-touch-move="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false}">
        <swiper-slide v-for="(main, i) in mainImgs" :key="i">
            <div class="swiper_box">
                <img :src="`/images/main/main_0${main}.png`" alt="">
            </div>
        </swiper-slide>
        </swiper>
    </div>
</template>
  
<script lang="ts">
    import { Pagination, Autoplay } from 'Swiper'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  
    import 'swiper/css'
    import 'swiper/css/pagination'
  
    export default {
      components: {
        Swiper,
        SwiperSlide
      },
      setup() {
        return {
          modules: [Pagination, Autoplay],
          mainImgs: ['1','2','3','4','5']
        }
      }
    }
</script>
<style>
    .swiper-pagination-bullet {
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        border: 1px solid #ee495a;
        background: none;
    }

    .swiper-pagination-bullet-active {
        background: #ee495a;
    }    
</style>
<style lang="scss" scoped>
div{
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    .swiper_box{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}

</style>