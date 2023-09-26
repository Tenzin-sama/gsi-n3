<template>
  <footer class="width-100 bg-blk90 padding-y-45">
      <div class="width-content margin-auto d-flex-column gap-16">
        <!-- top line -->
        <div class="width-100 d-flex-row tablet-column gap-32 justify-between">
          <div class="fg-white-70 d-flex-row gap-8 align-center justify-start">
            <label>GSI Group</label>
            <span class="dot bg-white"></span>
            <label class="muted">Delivering Excellence</label>
            <span class="dot bg-white"></span>
            <label class="muted">Geodisaster Experts, Consulting Engineers and Planners</label>
          </div>
          <div class="fg-white-70 d-flex-row align-center justify-end gap-32 mobile-column">
            <NuxtLink to="/" class="text-decoration-none fg-white hover-fg-primary">Home</NuxtLink>
            <NuxtLink to="/about" class="text-decoration-none fg-white hover-fg-primary">About</NuxtLink>
            <NuxtLink to="/services" class="text-decoration-none fg-white hover-fg-primary">Services</NuxtLink>
            <NuxtLink to="/clients" class="text-decoration-none fg-white hover-fg-primary">Clients</NuxtLink>
            <NuxtLink to="/contact" class="text-decoration-none fg-white hover-fg-primary">Contact</NuxtLink>
            
          </div>
        </div>
        <!-- second line -->
        <div class="width-100 d-flex-row tablet-column gap-32 justify-between align-center">
          <label class="fg-muted">© 2023 Geotech Solutions International</label>
          <div class="fg-white-70 d-flex-row align-center justify-end gap-16">
            <a href="https://twitter.com/gsi_nepal" target="_blank" class="hover-bg-primary hover-fg-primary padding-8">
              <img class="hover-fg-primary" src="img/socials/twitter.svg">
            </a>
            <a href="https://www.facebook.com/GSINepal2015/" target="_blank" class="hover-bg-primary hover-fg-primary padding-8">
              <img class="hover-fg-primary" src="img/socials/facebook.svg">
            </a>
            <!-- <a href="#" target="_blank" class="hover-bg-primary hover-fg-primary padding-8">
              <img class="hover-fg-primary" src="img/socials/pinterest.svg">
            </a> -->
            <a href="https://www.instagram.com/explore/locations/1035328630/geotech-solutions-international/" target="_blank" class="hover-bg-primary hover-fg-primary padding-8">
              <img class="hover-fg-primary" src="img/socials/instagram.svg">
            </a>
          </div>
        </div>
      </div>
    </footer>
</template>