<template>
  <!-- contact card -->
  <section>
    <!-- duo -->
    <div
      class="d-flex d-flex-row justify-between bg-light-gray contact-us-card rounded-8 margin-auto margin-bottom-100"
    >
      <div
        class="width-100 d-flex-row justify-between align-center padding-x-50 padding-y-40 gap-24 sm-desktop-gap-16 mobile-column"
      >
        <div class="width-64 d-flex-column align-start mobile-full">
          <label class="fg-muted f-16 text-decoration-none f-uppercase"
            >inquire about our services</label
          >
          <h3
            class="width-100 f-24 fg-blk90 line-height-34 resp-line-height-16"
          >
            You can contact us for consultations or any inquiries.
          </h3>
        </div>
        <div class="contact rounded-2 d-inline">
          <NuxtLink to="/contact" class="contact-button">Contact us</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>