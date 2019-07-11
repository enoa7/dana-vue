<template>
  <div class="app-body">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "AppBody",
  data() {
    return {
      lists: []
    };
  }
};
</script>
