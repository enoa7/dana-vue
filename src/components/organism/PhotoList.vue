<template>
  <ul class="list photo-list">
    <li v-for="(list, index) in lists" :key="index">
      <Photo :data="list" />
    </li>
  </ul>
</template>

<script>
import Axios from "axios";
import Photo from "@/components/molecule/Photo";
export default {
  name: "PhotoList",
  components: {
    Photo
  },
  data() {
    return {
      lists: []
    };
  },
  methods: {
    async getPhotos() {
      try {
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5"
        );
        this.lists = [...data];
      } catch (err) {
        console.log("error =>", err);
      }
    }
  },
  mounted() {
    this.getPhotos();
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-left: 0;
  list-style-type: none;
}
</style>
