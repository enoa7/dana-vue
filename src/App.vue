<template>
  <div id="app">
    <AppHeader />
    <AppBody />
    <div class="app-footer"></div>
  </div>
</template>

<script>
import AppHeader from "@/components/organism/AppHeader";
import AppBody from "@/components/template/AppBody";
export default {
  name: "app",
  components: {
    AppHeader,
    AppBody
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";

#app {
  font-family: $family-sans-serif;
}
</style>
