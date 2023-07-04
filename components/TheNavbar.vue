<template>
  <!-- navbar -->
  <nav class="border-bottom">
    <div class="top-banner-nav mobile-disp-none">
      <div class="content">
        <label>Geotech Solutions International</label
        ><label class="muted"
          >Geodisaster Experts, Consulting Engineers and Planners</label
        ><span class="dot bg-white"></span> <label>GSI Group</label
        ><label class="muted">Delivering Excellence</label>
      </div>
    </div>
    <div class="navbar">
      <div class="logo">
        <NuxtLink to="/"
          ><img
            src="~/public/img/nav-logo.png"
            alt="Company Logo"
            width="108"
            height="81"
        /></NuxtLink>
      </div>
      <div class="nav-links">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/clients">Clients</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/imagegallery">Gallery</NuxtLink></li>
        </ul>
      </div>
      <!--  menu icon for mobile-->
      <a href="javascript:void(0);" class="icon desktop-disp-none">
        <img @click="showMenu()" class="fg-primary"
            src="~/public/img/menu-ham.svg"
            alt="Company Logo"
            width="48"
            height="32"
        />
      </a>
      <div class="contact">
        <NuxtLink to="contact" class="contact-button">Contact Us</NuxtLink>
      </div>
    </div>
    <!--  mobile menu-->
    <div id="myLinks" class="mobile-nav-menu  w-100 d-flex-column desktop-disp-none d-none margin-bottom-24">
      <ul ty class="w-100 fg-blk90  width-100"  >
          <li><NuxtLink to="/" class="fg-primary text-decoration-none hover-fg-primary width-100">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="fg-blk90 text-decoration-none hover-fg-primary">About</NuxtLink></li>
          <li><NuxtLink to="/services" class="fg-blk90 text-decoration-none hover-fg-primary">Services</NuxtLink></li>
          <li><NuxtLink to="/clients" class="fg-blk90 text-decoration-none hover-fg-primary">Clients</NuxtLink></li>
          <li><NuxtLink to="/contact" class="fg-blk90 text-decoration-none hover-fg-primary">Contact</NuxtLink></li>
          <li><NuxtLink to="/imagegallery" class="fg-blk90 text-decoration-none hover-fg-primary">Gallery</NuxtLink></li>
        </ul>
    </div>
  </nav>
</template>

<script setup>
function showMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} </script>

<style scoped>
.mobile-nav-menu li{
  font-size: 28px;
  padding-top: 8px;
  padding-bottom: 16px;
  width: 100%;
  color: #16243d !important;
  text-decoration: none;
}
.mobile-nav-menu Nuxtlink{
  font-size: 16px;
}
.mobile-nav-menu ul{
  list-style-type: none;
  width: 100%
}
.d-none{
  display: none;
}
</style>
