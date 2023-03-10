<template>
    <div>
        
    <swiper :modules="modules" :pagination="{ clickable: true }" :allow-touch-move="true">
      <swiper-slide></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
    </div>
</template>
  
  <script>
    import { Pagination } from 'Swiper'
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
          modules: [Pagination]
        }
      }
    }
  </script>