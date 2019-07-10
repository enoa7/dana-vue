<template>
  <div>
    <ul class="list photo-list">
      <li v-for="(list, index) in PHOTOS" :key="index">
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
export default {
  name: "PhotoList",
  components: {
    Photo,
    Pagination
  },
  computed: {
    ...mapGetters(["PHOTOS"])
  },
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    this.$store.dispatch("GET_PHOTOS", 2);
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
