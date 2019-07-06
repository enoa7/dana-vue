<template>
  <section class="hero" v-bind:style="{ backgroundImage: `url('${banner}')` }">
    <div class="hero-body">
      <div class="container">
        <Heading
          tag="h1"
          adClass="title is-spaced"
          value="Chuck Norris Jokes"
        />
        <Heading tag="h2" adClass="subtitle" :value="detail && detail.value" />
        <a class="button is-link is-inverted is-outlined is-medium is-fullwidth"
          >Learn More</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import Axios from "axios";
import Heading from "@/components/atom/Heading";
export default {
  name: "HeroBanner",
  components: {
    Heading
  },
  computed: {
    h1() {
      return "h1";
    }
  },
  data() {
    return {
      banner: "https://source.unsplash.com/random",
      detail: null
    };
  },
  methods: {
    async getChuckNorrisJokes() {
      try {
        const { data } = await Axios.get(
          "https://api.chucknorris.io/jokes/random"
        );
        this.detail = data;
      } catch (err) {
        console.error("Error!", err);
      }
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
