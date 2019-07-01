<template>
  <div id="app">
    <AppHeader />
    <div class="app-body"></div>
    <div class="app-footer"></div>
  </div>
</template>

<script>
import AppHeader from '@/components/organism/AppHeader';
export default {
  name: "app",
  components: {
    AppHeader
    // HelloWorld
  }
};
</script>

<style lang="scss">

@import "@/assets/sass/app.scss";

#app {
    font-family: $family-sans-serif;
}
</style>
