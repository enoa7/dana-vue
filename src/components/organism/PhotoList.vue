<template>
  <div>
    <ul class="list photo-list">
      <li v-for="(list, index) in getData" :key="index">
        <Photo :data="list" :index="index" />
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script>
import Photo from "@/components/molecule/Photo";
import Pagination from "@/components/molecule/Pagination";
import { mapGetters } from "vuex";
import localforage from "localforage";
import _ from "lodash";
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
  computed: {
    ...mapGetters(["PHOTOS"]),
    getData() {
      return !_.isEmpty(this.lists) ? this.lists : this.PHOTOS;
    }
  },
  mounted() {
    localforage.getItem("photos").then(resp => {
      if (resp) {
        this.lists = resp;
      } else {
        // this.getPhotoData();
        this.$store.dispatch("GET_PHOTOS", 1);
      }
    });
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

  // fancy grid @_@
  @media screen and (min-width: 1216px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }

  li {
    padding: 1rem;
  }
}
</style>
