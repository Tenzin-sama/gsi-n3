<template>
  <!-- navbar -->
  <nav>
      <div class="top-banner-nav">
        <div class="content">
          <label>Geotech Solutions International</label><label class="muted">Geodisaster Experts, Consulting Engineers
            and Planners</label><span class="dot bg-white"></span>
          <label>GSI Group</label><label class="muted">Delivering Excellence</label>
        </div>
      </div>
      <div class="navbar">
        <div class="logo">
          <NuxtLink to="/"><img src="~/public/img/nav-logo.png" alt="Company Logo" width="108" height="81"></NuxtLink>
        </div>
        <div class="nav-links">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/clients">Clients</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="contact">
          <NuxtLink to="contact" class="contact-button">Contact Us</NuxtLink>
        </div>
      </div>

    </nav>
</template>

<script setup>

</script>

<style scoped>

</style>