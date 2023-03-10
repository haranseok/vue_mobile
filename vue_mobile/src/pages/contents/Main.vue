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
<style lang="scss" scoped>
div{
    width: 100%;
    background: #d0d0d0;
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