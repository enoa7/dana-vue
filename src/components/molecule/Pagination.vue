<template>
  <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li class="pagination-link" @click="goToPrev">Back</li>
      <li
        v-for="index in maxPagination"
        :key="index"
        class="pagination-link"
        :class="{ 'is-current': index == getCurrentPage }"
        @click="getPhotosByPage(index)"
      >
        {{ index }}
      </li>
      <li class="pagination-link" @click="goToNext">Next</li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import localforage from "localforage";
export default {
  name: "Pagination",
  data() {
    return {
      maxPagination: 5
    };
  },
  computed: {
    ...mapGetters(["PAGE"]),
    getCurrentPage() {
      return this.PAGE;
    }
  },
  mounted() {},
  methods: {
    getPhotosByPage(page) {
      this.$store.dispatch("GET_PHOTOS", page);
    },
    goToPrev() {
      const currentPage = this.getCurrentPage;
      const prevPage = currentPage != 1 ? this.getCurrentPage - 1 : 1;
      this.$store.dispatch("GET_PHOTOS", prevPage);
    },
    goToNext() {
      const currentPage = this.getCurrentPage;
      const nextPage =
        currentPage < this.maxPagination
          ? this.getCurrentPage + 1
          : this.maxPagination;
      this.$store.dispatch("GET_PHOTOS", nextPage);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-list {
  justify-content: center;
}

.pagination-link {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  border: none;
}
</style>
