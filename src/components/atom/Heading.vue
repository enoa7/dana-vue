<template>
  <component :is="tag" :class="adClass">{{ value ? value : "" }}</component>
</template>

<script>
export default {
  name: "Heading",
  props: ["tag", "adClass", "value"],
  computed: {
    h1() {
      return "h1";
    },
    h2() {
      return "h2";
    },
    h3() {
      return "h3";
    },
    h4() {
      return "h4";
    },
    h5() {
      return "h5";
    }
  }
};
</script>
