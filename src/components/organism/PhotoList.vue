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
