<template>
  <!-- this is the updated client carousel, however because it is not as smooth, as well as there being no reason for updating the current one to this, this component is just parked here. -->
  <Carousel :items-to-show="12" :wrap-around="true" :autoplay="1" :transition="5000" :pause-autoplay-on-hover="false">
    <Slide v-for="slide in slideData" :key="slide.id">
      <div class="carousel__item">
        <img class="bg-white" :src="slide.image" alt="Slide {{ slide.id }}" />
      </div>
    </Slide>

    <template #addons>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slideData: [
        { id: 1, image: 'img/clients-logo/Aayumalunhydro.jpg' },
        { id: 2, image: 'img/clients-logo/bedrock engineering.jpg' },
        { id: 3, image: 'img/clients-logo/Chilime hydropower.jpg' },
        { id: 4, image: 'img/clients-logo/DOED.png' },
        { id: 5, image: 'img/clients-logo/Dusit Thani.jpeg' },
        { id: 6, image: 'img/clients-logo/Earth Observatory of Singapore.png' },
        { id: 7, image: 'img/clients-logo/fullbrightlogo.jpg' },
        { id: 8, image: 'img/clients-logo/jurassic_logo_small.png' },
        { id: 9, image: 'img/clients-logo/Kadoorie.png' },
        { id: 10, image: 'img/clients-logo/NEA engineering company.png' },
        { id: 11, image: 'img/clients-logo/NK buildcon.jpg' },
        { id: 12, image: 'img/clients-logo/Seismotech.png' },
        { id: 13, image: 'img/clients-logo/Real path engineering.jpg' },
        { id: 14, image: 'img/clients-logo/UNDP-Logo-Blue-Large.png' },
        { id: 15, image: 'img/clients-logo/unseco.jpg' },
        { id: 16, image: 'img/clients-logo/urja.png' },
        { id: 17, image: 'img/clients-logo/Vindhyavasini-Secondary-School-Pokhara.png' },
        // Add more images as needed
      ],
    };
  },
})
</script>

<style>
.carousel__item {
  min-height: 100px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.carousel__item img {
  max-width: 100%;
  max-height: 100%;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
