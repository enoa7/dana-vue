<template>
  <div>
    <HeroBanner />
    <div class="container">
      <PhotoList />
    </div>
  </div>
</template>

<script>
import HeroBanner from "@/components/organism/HeroBanner";
import PhotoList from "@/components/organism/PhotoList";
export default {
  name: "Home",
  components: {
    HeroBanner,
    PhotoList
  }
};
</script>
