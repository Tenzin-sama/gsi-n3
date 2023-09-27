<template>
  <Carousel :wrap-around="true">
    <Slide v-for="(content, index) in slideContent" :key="index">
      <!-- Slide content -->
      <div class="carousel__item">
        <!-- Render div sections or other elements as needed -->
        <div v-for="(section, sectionIndex) in content.sections" :key="sectionIndex">
          <div v-if="section.type === 'text'">{{ section.text }}</div>
          <div v-else-if="section.type === 'image'">
            <img :src="section.src" alt="Slide {{ index + 1 }} Section {{ sectionIndex + 1 }}" />
          </div>
          <!-- Add more conditions for other types of content -->
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
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
      slideContent: [
        {
          sections: [
            { type: 'text', text: 'Slide 1, Section 1: Text content' },
            { type: 'image', src: 'img/hero1.png' },
            // Add more sections as needed
          ],
        },
        {
          sections: [
            { type: 'text', text: 'Slide 2, Section 1: More text content' },
            { type: 'text', text: 'Slide 2, Section 2: Additional text content' },
            // Add more sections as needed
          ],
        },
        // Add more slides as needed
      ],
    };
  },
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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
