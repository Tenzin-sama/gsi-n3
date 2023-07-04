<template>
  <!-- hero section -->
  <section class="width-100 position-relative">
    <div class="image-overlay"></div>
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
              src="~/public/img/geofem-logo.png"
              alt="GEOFEM Company Logo"
              width="244"
              height="54"
            />
          </div>
          <p class="fg-white-70 f-18">
            GSI's partnership with GEOFEM is driving innovation in geoscience.
            By combining our expertise in geological mapping and mineral
            exploration with GEOFEM's cutting-edge geophysical research, we are
            able to offer our clients a comprehensive suite of services that
            pushes the boundaries of geoscience.
          </p>
          <div class="contact rounded-2">
            <NuxtLink to="/geofem" class="contact-button">Learn More</NuxtLink>
          </div>
        </div>
        <!-- right -->
        <div class="geofem-logo-default">
          <img
            src="~/public/img/geofem-logo.png"
            alt="GEOFEM Company Logo"
            width="244"
            height="54"
          />
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
        >
          <NuxtLink to="/services1" class="hover-bg-darker"
            ><img src="~/public/img/service rockfall.jpg"
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
            ><img src="~/public/img/service environmental.jpg"
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
            ><img src="~/public/img/service structural.jpg"
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
            ><img src="~/public/img/service Geotechnical.jpg"
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

  <!-- about section -->
  <section
    class="width-content margin-auto d-flex d-flex-row justify-between margin-bottom-200 tablet-column"
  >
    <img class="about-company-img" src="~/public/img/company.jpg" />
    <!-- left -->
    <div
      class="d-flex justify-start d-flex-column gap-32 max-width-569 align-start"
    >
      <h1 class="fg-blk90">About Geotech Solutions International</h1>
      <p class="fg-muted f-18 line-height-34">
        Geotech Solutions International (GSI) is an engineering consulting firm
        with offices in Bagdol, Dhobighat, Lalitpur, Nepal. GSI provides
        consulting services in major key areas of engineering and social
        science. GSI Team has a wealth of experience in the field of project
        planning, transportation, hydropower, water supply and sanitation, rural
        and urban infrastructure development, water resources development,
        social and environmental planning, and disaster risk management.
      </p>
      <NuxtLink
        to="/contact"
        class="fg-primary d-flex-row gap-8 hover-fg-primary text-decoration-none f-bold f-20"
      >
        Get in touch with us<img
          class=""
          src="~/public/img/chevron-right.svg"
        />
      </NuxtLink>
    </div>
  </section>
  <!-- Why GSI section -->
  <section
    class="width-content margin-auto d-flex d-flex-column gap-32 margin-bottom-200"
  >
    <!-- why us row 1/2 -->
    <div
      class="width-100 d-flex d-flex-row justify-between tablet-gap-32 tablet-column"
    >
      <!-- duo -->
      <div class="d-flex d-flex-row justify-between why-gsi-duo-card-container">
        <div class="sp-HW-270">
          <h1 class="fg-blk90 margin-top-64">Why GSI?</h1>
        </div>
        <div
          class="d-flex-column align-start justify-be sp-HW-270 bg-primary-50 rounded-10"
        >
          <h0
            class="fg-white margin-left-12 margin-top-64 f-64 f-bold mobile-margin-top-16"
            >1</h0
          >
          <h3 class="fg-white width-90 margin-left-12 margin-bottom-24">
            Pioneer in rockfall protection
          </h3>
        </div>
      </div>
      <!-- duo -->
      <div class="d-flex d-flex-row justify-between why-gsi-duo-card-container">
        <div
          class="d-flex-column align-start justify-be sp-HW-270 bg-light-gray rounded-10"
        >
          <h0
            class="fg-blk90 margin-left-12 margin-top-64 f-64 f-bold mobile-margin-top-16"
            >2</h0
          >
          <h3 class="fg-blk90 width-90 margin-left-12 margin-bottom-24">
            Geotechnical planning support
          </h3>
        </div>
        <div
          class="d-flex-column align-start justify-be sp-HW-270 bg-blk90 rounded-10"
        >
          <h0
            class="fg-white margin-left-12 margin-top-64 f-64 f-bold mobile-margin-top-16"
            >3</h0
          >
          <h3 class="fg-white width-90 margin-left-12 margin-bottom-24">
            Disaster-safe infrastructure solutions
          </h3>
        </div>
      </div>
    </div>
    <!-- why us row 2/2 -->
    <div
      class="width-100 d-flex d-flex-row justify-between tablet-gap-32 tablet-column"
    >
      <!-- duo -->
      <div class="d-flex d-flex-row justify-between why-gsi-duo-card-container">
        <div
          class="d-flex-column align-start justify-be sp-HW-270 bg-blue-50 rounded-10"
        >
          <h0
            class="fg-white margin-left-12 margin-top-64 f-64 f-bold mobile-margin-top-16"
            >4</h0
          >
          <h3 class="fg-white width-90 margin-left-12 margin-bottom-24">
            Experienced EPC contractor
          </h3>
        </div>
        <div
          class="d-flex-column align-start justify-be sp-HW-270 bg-blk90 rounded-10"
        >
          <h0
            class="fg-white margin-left-12 margin-top-64 f-64 f-bold mobile-margin-top-16"
            >5</h0
          >
          <h3 class="fg-white width-90 margin-left-12 margin-bottom-24">
            Civil construction expertise
          </h3>
        </div>
      </div>
      <!-- duo -->
      <div
        class="d-flex d-flex-row justify-between why-gsi-duo-card-container bg-light-gray contact-us-mini rounded-10"
      >
        <div
          class="width-100 d-flex-column justify-start align-start padding-x-32 padding-y-30 gap-24 sm-desktop-gap-16"
        >
          <label
            class="fg-muted hover-fg-primary text-decoration-none f-uppercase"
            >inquire about our services</label
          >
          <h3 class="width-64 f-24 fg-blk90 line-height-34 resp-line-height-16">
            You can contact us for consultations or any inquiries.
          </h3>
          <div class="contact rounded-2 d-inline">
            <NuxtLink to="/contact" href="contact.html" class="contact-button">Contact us</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- our services section -->
  <section class="width-100 bg-blk90 d-flex d-flex-column">
    <div
      class="width-content d-flex d-flex-column justify-between gap-32 margin-auto margin-bottom-100"
    >
      <h1 class="fg-white margin-bottom-24 margin-top-64">Our Services</h1>
      <!-- individual row 1/2-->
      <div
        class="width-100 d-flex d-flex-row justify-between tablet-column tablet-gap-32"
      >
        <!-- individual service1 -->
        <div
          class="width-43 rounded-10 bg-white d-flex d-flex-row align-center padding-y-30 padding-x-32 gap-20 shadow indiv-service tablet-full"
        >
          <NuxtLink to="/services1" class="hover-bg-darker"
            ><img src="~/public/img/service rockfall.jpg"
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
            ><img src="~/public/img/service environmental.jpg"
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
            ><img src="~/public/img/service structural.jpg"
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
            ><img src="~/public/img/service Geotechnical.jpg"
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

  <!-- more about GSI -->
  <section
    class="width-100 d-flex-column justify-center margin-y-200 gap-56 overflow-hidden0"
  >
    <h1 class="fg-blk90">More about GSI</h1>
    <!-- cards row -->
    <div
      class="width-content d-flex-row justify-between tablet-column tablet-gap-32"
    >
      <!-- indiv more card -->
      <div class="d-flex-column gap-16 padding-16 shadow rounded-10">
        <div class="rounded-10 bg-light-gray overflow-hidden">
          <img
            src="~/public/img/hero.png"
            class="border-0 more-about-gsi-img"
          />
        </div>
        <div class="d-flex-column gap-0 justify-center">
          <h3 class="fg-blk90">Objectives</h3>
          <NuxtLink to="/about"
            href="about.html#objectives-section"
            class="fg-primary hover-fg-primary text-decoration-none f-uppercase f-14"
            >Learn More</NuxtLink>
        </div>
      </div>
      <!-- indiv more card -->
      <div class="d-flex-column gap-16 padding-16 shadow rounded-10">
        <div class="rounded-10 bg-light-gray overflow-hidden">
          <img
            src="~/public/img/hero.png"
            class="border-0 more-about-gsi-img"
          />
        </div>
        <div class="d-flex-column gap-0 justify-center">
          <h3 class="fg-blk90">Innovation</h3>
          <NuxtLink to="/about" 
            class="fg-primary hover-fg-primary text-decoration-none f-uppercase f-14"
            >Learn More</NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- clients section -->
  <section class="width-100 d-flex-column justify-center margin-y-200 gap-56">
    <h1 class="fg-blk90">Clients</h1>
    <!-- iteration 1 -->
    <!-- clients -->
    <!-- <div class="width-100 overflow-x-nobar test-div">
        <div class="client-tiny"> .</div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny bg-blk90"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny bg-blk90"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny"> </div>
        <div class="client-tiny bg-primary"> </div>
      </div> -->

    <!-- iteration 2 -->
    <div class="image-list">
      <div class="image-item bg-blk90"></div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/Aayu malun hydro.jpg" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/bedrock engineering.jpg" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/Chilime hydropower.jpg" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/DOED.png" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/Dusit Thani.jpeg" />
      </div>
      <div class="image-item">
        <img
          src="~/public/img/clients-logo/Earth Observatory of Singapore.png"
        />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/fullbrightlogo.jpg" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/jurassic_logo_small.png" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/Kadoorie.png" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/NEA engineering company.png" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/NK buildcon.jpg" />
      </div>
      <div class="image-item">
        <img src="~/public/img/clients-logo/Real path engineering.jpg" />
      </div>
      <div class="image-item bg-primary"></div>
    </div>
    <div class="contact rounded-2">
      <NuxtLink to="/clients" class="contact-button"
        >See all our clients</NuxtLink
      >
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
