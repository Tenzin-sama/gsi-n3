<template>
  <TheNavbar />
<body>
  <slot />
</body>
  
  <TheFooter />
</template>

<script setup>
// // Get the button:
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   // if (
//   //   document.body.scrollTop > 800 ||
//   //   document.documentElement.scrollTop > 800
//   // ) {
//   //   mybutton.style.display = "block";
//   // } else {
//   //   mybutton.style.display = "none";
//   // }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
// Use a static import for server-side compatibility
import("~/assets/style.css");
import("~/assets/style-class.css");
import("~/assets/resp.css");

// Caution: Dynamic imports are not server-side compatible
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

@import url("~/assets/style.css");
</style>
