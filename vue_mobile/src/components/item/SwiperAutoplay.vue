<template>
    <div>
        <swiper 
            :modules="modules" 
            :pagination="pagination" 
            :allow-touch-move="true"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false}"
            >
            <swiper-slide>
                <slot name="slide_content"></slot>
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
          pagination: {
            clickable: true,
          }
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