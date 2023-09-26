<template>
  <section class="width-100 d-flex d-flex-column">
    <div class="width-100 bg-blk90 d-flex d-flex-column">
      <div
        class="width-content d-flex d-flex-column justify-start align-start gap-32 margin-auto margin-bottom-100"
      >
        <div class="d-flex-column gap-16 justify-start align-start">
          <h1 class="fg-white margin-top-64">Our Services</h1>
          <p class="f-18 fg-white-70 line-height-34">
            We provide services for various engineering, geotechnical and
            geological solutions, which include:
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- services section -->
  <section
    class="margin-auto width-content d-flex position-relative margin-bottom-100"
  >
    <div
      class="width-100 margin-negative-top-32 d-flex d-flex-column justify-between gap-32"
    >
      <!-- individual row 1/2-->
      <div
        class="width-100 d-flex d-flex-row justify-between tablet-column tablet-gap-32"
      >
        <!-- individual service1 -->
        <div
          class="width-43 rounded-10 bg-white d-flex d-flex-row align-center padding-y-30 padding-x-32 gap-20 shadow indiv-service tablet-full"
        ><NuxtLink to="/services1" class="hover-bg-darker"
              ><img src="img/service rockfall.jpg"
            /></NuxtLink>
          <div class="d-flex d-flex-column align-start gap-0">
            
            <NuxtLink
              to="/services1"
              class="d-flex d-flex-column align-start gap-0 text-decoration-none"
            >
              <h3 class="fg-blk90 hover-fg-primary">
                Rockfall protection solutions
              </h3>
              <NuxtLink
                to="/services1"
                class="fg-primary hover-fg-primary text-decoration-none f-uppercase"
                >Learn More</NuxtLink
              >
            </NuxtLink>
          </div>
        </div>

        <!-- individual service2 -->
        <div
          class="width-43 rounded-10 bg-white d-flex d-flex-row align-center padding-y-30 padding-x-32 gap-20 shadow indiv-service tablet-full"
        >
          <NuxtLink to="/services2" class="hover-bg-darker"
            ><img src="img/service environmental.jpg"
          /></NuxtLink>
          <NuxtLink
            to="/services2"
            class="d-flex d-flex-column align-start gap-0 text-decoration-none"
          >
            <h3 class="fg-blk90 hover-fg-primary">Environmental Solutions</h3>
            <NuxtLink
              to="/services2"
              class="fg-primary hover-fg-primary text-decoration-none f-uppercase"
              >Learn More</NuxtLink
            >
          </NuxtLink>
        </div>
      </div>
      <!-- individual row 2/2 -->
      <div
        class="width-100 d-flex d-flex-row justify-between tablet-column tablet-gap-32"
      >
        <!-- individual service3 -->
        <div
          class="width-43 rounded-10 bg-white d-flex d-flex-row align-center padding-y-30 padding-x-32 gap-20 shadow indiv-service tablet-full"
        >
          <NuxtLink to="/services3" class="hover-bg-darker"
            ><img src="img/service structural.jpg"
          /></NuxtLink>
          <NuxtLink
            to="/services3"
            class="d-flex d-flex-column align-start gap-0 text-decoration-none"
          >
            <h3 class="fg-blk90 hover-fg-primary">Structural Solutions</h3>
            <NuxtLink
              to="/services3"
              class="fg-primary hover-fg-primary text-decoration-none f-uppercase"
              >Learn More</NuxtLink
            >
          </NuxtLink>
        </div>

        <!-- individual service -->
        <div
          class="width-43 rounded-10 bg-white d-flex d-flex-row align-center padding-y-30 padding-x-32 gap-20 shadow indiv-service tablet-full"
        >
          <NuxtLink to="/services4" class="hover-bg-darker"
            ><img src="img/service Geotechnical.jpg"
          /></NuxtLink>
          <NuxtLink
            to="/services4"
            class="d-flex d-flex-column align-start gap-0 text-decoration-none"
          >
            <h3 class="fg-blk90 hover-fg-primary">Geotechnical Solutions</h3>
            <NuxtLink
              to="/services4"
              class="fg-primary hover-fg-primary text-decoration-none f-uppercase"
              >Learn More</NuxtLink
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
