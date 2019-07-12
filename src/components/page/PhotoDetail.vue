<template>
  <section class="section">
    <div class="container">
      <!-- <div>this is photo detail => {{ getData }}</div> -->
      <div
        class="photo-image"
        :style="{ backgroundImage: `url('${getData.urls.regular}')` }"
      ></div>
    </div>
  </section>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "PhotoDetail",
  props: {
    id: VueTypes.string.def("")
  },
  computed: {
    getPhotoId() {
      return this.id;
    },
    getData() {
      const photos = this.$store.state.photos;
      return photos.find(e => e.id === this.id);
    }
  },
  mounted() {
    //   console.log(this.getData)
  },
  methods: {
    // getData(photoId) {
    //   const photos = this.$store.state.photos;
    //   console.log(this.$store.state);
    //   return photos.find(e => e.id === photoId);
    //   // return this.$store;
    // }
  }
};
</script>

<style lang="scss" scoped>
.photo-image {
  height: 50vh;
}
</style>
