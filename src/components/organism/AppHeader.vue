<template>
  <div class="app-header">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link :to="'/'" class="navbar-item">
            <img class="app-logo" src="@/assets/dana-logo.svg" alt />
          </router-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleSubmenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isSubmenuActive }">
          <div class="navbar-end">
            <router-link
              v-for="(item, index) in links"
              :key="index"
              :to="item.url"
              class="navbar-item"
              >{{ item.title }}</router-link
            >
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
          title: "About",
          url: "/about"
        },
        {
          title: "Contact Us",
          url: "/contact-us"
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
