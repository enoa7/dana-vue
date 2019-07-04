<template>
  <div class="app-body">
    <HeroBanner />
    <ul>
      <li v-for="list in lists" :key="list.id">
        <h4>{{ list.title }}</h4>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import HeroBanner from "@/components/organism/HeroBanner";
export default {
  name: "AppBody",
  components: {
    HeroBanner
  },
  data() {
    return {
      lists: []
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5")
        .then(resp => {
          this.lists = [...resp.data];
        });
    }
  },

  mounted() {
    this.fetchData();
  }
};
</script>
