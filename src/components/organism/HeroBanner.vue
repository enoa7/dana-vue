<template>
  <section class="hero" v-bind:style="{ backgroundImage: `url('${banner}')` }">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-spaced">Chuck Norris Jokes</h1>
        <h2 class="subtitle">{{ detail && detail.value }}</h2>
        <a class="button is-link is-inverted is-outlined is-medium is-fullwidth">Learn More</a>
      </div>
    </div>
  </section>
</template>

<script>
import Axios from "axios";
export default {
  name: "HeroBanner",
  data() {
    return {
      banner: "https://source.unsplash.com/random",
      detail: null
    };
  },
  methods: {
    getChuckNorrisJokes() {
      Axios.get("https://api.chucknorris.io/jokes/random")
        .then(resp => {
          this.detail = resp.data;
        })
        .catch(err => {
          console.error("Error!", err);
        });
    }
  },
  mounted() {
    this.getChuckNorrisJokes();
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 320px;
  height: 100%;
  overflow-y: hidden;
  .title,
  .subtitle {
    color: $light;
    text-align: center;
  }
}
</style>
