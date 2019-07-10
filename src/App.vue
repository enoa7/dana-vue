<template>
  <div id="app">
    <AppHeader />
    <AppBody />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/organism/AppHeader";
import AppBody from "@/components/template/AppBody";
import AppFooter from "@/components/template/AppFooter";
export default {
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";

#app {
  font-family: $family-sans-serif;
}

.clearfix {
  content: "";
  clear: both;
  display: table;
}
</style>
