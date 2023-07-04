<template>
  <button onclick="scrollToTop()" id="myBtn" title="Go to top"></button>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style>
.scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: aqua;
}</style>