<template>
  <div class="app-body">
    <ul>
      <li v-for="list in lists" :key="list.id">
        <h4>{{ list.title }}</h4>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AppBody",
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
