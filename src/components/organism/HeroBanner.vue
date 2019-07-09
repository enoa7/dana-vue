<template>
  <section class="hero" :style="{ backgroundImage: `url('${banner}')` }">
    <div class="hero-body">
      <div class="container">
        <Heading
          tag="h1"
          ad-class="title is-spaced"
          value="Chuck Norris Jokes"
        />
        <Heading tag="h2" ad-class="subtitle" :value="detail && detail.value" />
        <div class="has-text-centered">
          <a class="button is-link is-inverted is-outlined is-medium"
            >Learn More</a
          >
        </div>
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
  data() {
    return {
      banner: "https://source.unsplash.com/random",
      detail: null
    };
  },
  computed: {
    h1() {
      return "h1";
    }
  },
  mounted() {
    this.getChuckNorrisJokes();
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
