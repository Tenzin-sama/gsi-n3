<template>
  <div class="image-grid">
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg1.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg2.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg3.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg4.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg5.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg6.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg7.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg8.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg9.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg10.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg11.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg12.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg13.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg14.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg15.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg16.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg17.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg18.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg19.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg20.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg21.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg22.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg23.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg24.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg25.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg26.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg27.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg28.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg29.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg30.jpg" />
    </div>
    <div class="indiv-image-gallery">
      <img src="img/newimageas/NewImg31.jpg" />
    </div>
    <!-- <img src="~/src/img/newimages/NewImg1.jpg"> -->
  </div>
</template>

<script></script>

<style scoped>
.image-grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
  justify-content: space-between;
}
.indiv-image-gallery {
  width: 48.9%;
  aspect-ratio: 16 / 10;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 1164px) {
  .indiv-image-gallery {
    width: 100%;
    aspect-ratio: 16 / 10;
  }
}
</style>
