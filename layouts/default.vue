<template>
  <TheNavbar />
  <body>
    <slot />
  </body>
  <TheFooter />
</template>

<script setup>
// Use a static import for server-side compatibility
import("~/assets/style.css");
import("~/assets/style-class.css");
import("~/assets/resp.css");
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  transition: 0.1s ease-out;
}
</style>
