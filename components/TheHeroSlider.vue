<template>
  <Carousel :wrap-around="true">
    <Slide v-for="slide in 3" :key="slide">
      <!-- slide 1 -->
      <div class="carousel__item hero-section">
        <!-- hero slide -->
        <section class="width-100 position-relative">
          <div class="image-overlay w-100">
            <img class="width-100" src="img/hero1.png" />
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
.carousel__viewport {
  height: 700px;
}
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
  color: #000;
  opacity: 50%;
}
.image-overlay img,
.image-overlay {
  object-fit: fill;
}
.carousel__pagination {
  margin-top: -40px;
  color: #fff;
  z-index: -1;
  background-color: #fff;
}
.bg-pattern {
  background-color: #2c3d5a;
  opacity: 1;
  background-image: linear-gradient(
      30deg,
      #16243d 12%,
      transparent 12.5%,
      transparent 87%,
      #16243d 87.5%,
      #16243d
    ),
    linear-gradient(
      150deg,
      #16243d 12%,
      transparent 12.5%,
      transparent 87%,
      #16243d 87.5%,
      #16243d
    ),
    linear-gradient(
      30deg,
      #16243d 12%,
      transparent 12.5%,
      transparent 87%,
      #16243d 87.5%,
      #16243d
    ),
    linear-gradient(
      150deg,
      #16243d 12%,
      transparent 12.5%,
      transparent 87%,
      #16243d 87.5%,
      #16243d
    ),
    linear-gradient(
      60deg,
      #16243d77 25%,
      transparent 25.5%,
      transparent 75%,
      #16243d77 75%,
      #16243d77
    ),
    linear-gradient(
      60deg,
      #16243d77 25%,
      transparent 25.5%,
      transparent 75%,
      #16243d77 75%,
      #16243d77
    );
  background-size: 24px 42px;
  background-position: 0 0, 0 0, 12px 21px, 12px 21px, 0 0, 12px 21px;
}
</style>
