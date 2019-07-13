<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AppHeader from "@/components/organism/AppHeader";
import AppBody from "@/components/organism/AppBody";
import AppFooter from "@/components/organism/AppFooter";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    }
  },
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";

#app {
  font-family: $family-sans-serif;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.app-body {
  flex: 1;
}
.clearfix {
  content: "";
  clear: both;
  display: table;
}
</style>
