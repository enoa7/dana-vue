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
    ...mapGetters(["PAGE"]),
    getData() {
      return this.PHOTOS;
    }
  },
  mounted() {
    if (this.PAGE <= 0) {
      this.$store.dispatch("GET_PHOTOS", 1);
    } else {
      this.$store.dispatch("GET_PHOTOS", this.PAGE);
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
