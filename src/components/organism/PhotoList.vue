<template>
  <div>
    <ul class="list photo-list">
      <li v-for="(list, index) in lists" :key="index">
        <Photo :data="list" :index="index" />
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script>
import Axios from "axios";
import Photo from "@/components/molecule/Photo";
import Pagination from "@/components/molecule/Pagination";
import api from "@/apiConfig.json";
export default {
  name: "PhotoList",
  components: {
    Photo,
    Pagination
  },
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    this.getPhotos();
  },
  methods: {
    async getPhotos(page = 1) {
      try {
        const { data } = await Axios.get(`${api.image}&per_page=5&page=${page}`);
        this.lists = [...data];
      } catch (err) {
        console.log("error =>", err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-left: 0;
  list-style-type: none;
  box-shadow: none;
}

.photo-list {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    @media screen and (min-width: 1216px) {
      flex: 1 0 21%;
      margin: 1.5rem 0.5rem;
    }
  }
}
</style>
