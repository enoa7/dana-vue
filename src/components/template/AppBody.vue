<template>
  <div class="app-body">
    <HeroBanner />
    <PhotoList />
  </div>
</template>
<script>
import HeroBanner from "@/components/organism/HeroBanner";
import PhotoList from "@/components/organism/PhotoList";
export default {
  name: "AppBody",
  components: {
    HeroBanner,
    PhotoList
  },
  data() {
    return {
      lists: []
    };
  }
};
</script>
