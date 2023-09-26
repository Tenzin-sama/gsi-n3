<template>
  <div class="full-width-slider">
    <div class="slider-container">
      <div
        class="slider"
        :style="{
          transform: `translateX(${translateValue}%)`,
          transition: `transform ${transitionDuration}ms`,
        }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
      </div>
    </div>

    <div class="slider-controls">
      <button @click="prevSlide" class="control-button prev-button">Previous</button>
      <button @click="nextSlide" class="control-button next-button">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { image: 'https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg' },
        { image: 'https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg' },
        { image: 'https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg' },
        // Add more images as needed
      ],
      currentIndex: 0,
      translateValue: 0,
      transitionDuration: 300, // Adjust the transition duration as needed (in milliseconds)
      touchStartX: 0,
    };
  },
  computed: {
    maxIndex() {
      return this.slides.length - 1;
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
      this.updateTranslateValue();
    },
    nextSlide() {
      this.currentIndex = Math.min(this.maxIndex, this.currentIndex + 1);
      this.updateTranslateValue();
    },
    updateTranslateValue() {
      this.translateValue = -this.currentIndex * 100; // 100% for full width
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      const dragDelta = event.touches[0].clientX - this.touchStartX;
      this.translateValue = -this.currentIndex * 100 + (dragDelta / window.innerWidth) * 100;
    },
    handleTouchEnd(event) {
      const dragThreshold = 0.1; // Adjust the threshold as needed
      if (Math.abs(this.touchStartX - event.changedTouches[0].clientX) / window.innerWidth > dragThreshold) {
        if (this.touchStartX < event.changedTouches[0].clientX) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }
      this.updateTranslateValue();
    },
  },
  mounted() {
    this.updateTranslateValue();
  },
};
</script>

<style scoped>
.full-width-slider {
  width: 100%;
  overflow: hidden;
}

.slider-container {
  display: flex;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 300ms;
}

.slide {
  flex: 0 0 100%;
  height: auto;
  background-size: cover;
  background-position: center center;
}

.slider-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.control-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.prev-button {
  border-radius: 4px 0 0 4px;
}

.next-button {
  border-radius: 0 4px 4px 0;
}
</style>
