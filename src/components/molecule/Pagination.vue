<template>
  <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li
        class="pagination-link"
        v-bind:class="{'is-current' : index == PAGE}"
        v-on:click="getPhotosByPage(index)"
        v-for="index in 5"
        :key="index"
      >{{index}}</li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Pagination",
  computed: {
    ...mapGetters(["PAGE"])
  },
  methods: {
    getPhotosByPage(page) {
      this.$store.dispatch("GET_PHOTOS", page);
    } 
  }
};
</script>

<style lang="scss" scoped></style>
