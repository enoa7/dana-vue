<template>
  <div class="app-header">
    <div class="container is-widescreen">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img class="app-logo" src="@/assets/dana-logo.svg" alt />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleSubmenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          class="navbar-menu"
          :class="{ 'is-active': isSubmenuActive }"
        >

          <div class="navbar-end">
            <a
              class="navbar-item"
              :href="item.url"
              v-for="(item, index) in links"
              :key="index"
            >{{item.title}}</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isSubmenuActive: false,
      links: [
        {
          title: "about",
          ur: "#"
        },
        {
          title: "contact us",
          ur: "#"
        }
      ]
    };
  },
  methods: {
    toggleSubmenu() {
      this.isSubmenuActive = !this.isSubmenuActive;
    }
  }
};
</script>
