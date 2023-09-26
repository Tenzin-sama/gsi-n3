<template>
  <Carousel :wrap-around="true">
    <Slide v-for="slide in 3" :key="slide">
      <!-- slide 1 -->
      <div class="carousel__item hero-section">
        <!-- hero slide -->
        <section class="width-100 position-relative">
          <div class="image-overlay w-100">
            <img class="width-100" src="img/hero1.png">
          </div>
          <div class="width-100 hero-section d-flex justify-center">
            <!-- content container -->
            <div
              class="d-flex width-content height-100 justify-between mobile-column"
              style="z-index: 1"
            >
              <!-- left -->
              <div
                class="d-flex justify-start d-flex-column gap-32 width-64 align-start mobile-full"
              >
                <h1 class="fg-white mobile-margin-top-64">
                  Collaboration with GEOFEM
                </h1>
                <div class="geofem-logo-mobile">
                  <img
                    src="img/geofem-logo.png"
                    alt="GEOFEM Company Logo"
                    width="244"
                    height="54"
                  />
                </div>
                <p class="fg-white-70 f-18">
                  GSI's partnership with GEOFEM is driving innovation in
                  geoscience. By combining our expertise in geological mapping
                  and mineral exploration with GEOFEM's cutting-edge geophysical
                  research, we are able to offer our clients a comprehensive
                  suite of services that pushes the boundaries of geoscience.
                </p>
                <div class="contact rounded-2">
                  <NuxtLink to="/geofem" class="contact-button"
                    >Learn More</NuxtLink
                  >
                </div>
              </div>
              <!-- right -->
              <div class="geofem-logo-default">
                <img
                  src="img/geofem-logo.png"
                  alt="GEOFEM Company Logo"
                  width="244"
                  height="54"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #fff;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: #fff;
}
.image-overlay img, .image-overlay {
  object-fit: cover;
}
</style>
