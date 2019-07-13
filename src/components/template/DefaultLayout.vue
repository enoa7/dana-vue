<template>
  <div>
    <AppHeader />
    <AppBody />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/organism/AppHeader";
import AppBody from "@/components/organism/AppBody";
import AppFooter from "@/components/organism/AppFooter";
export default {
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppBody,
    AppFooter
  }
};
</script>
