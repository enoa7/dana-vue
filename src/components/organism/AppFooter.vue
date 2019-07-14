<template>
  <div class="app-footer">
    <div class="container cols">
      <div class="cols-item">
        <div class="list--flex">
          <div>Follow Us</div>
          <ul class="list--flex-list my-3">
            <li class="list--flex-item">
              <img src="@/assets/image/facebook.png" alt="facebook" />
            </li>
            <li class="list--flex-item">
              <img src="@/assets/image/instagram.png" alt="instagram" />
            </li>
            <li class="list--flex-item">
              <img
                src="@/assets/image/twitter-logo-silhouette.png"
                alt="twitter"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="cols-item">
        <nav class="list--flex">
          <ul class="list--flex-list menu-list">
            <li v-for="(item, index) in links" :key="index">
              <router-link :to="item.url" class="list--flex-item navbar-item">
                <span class="has-text-weight-bold">{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright">
          <p>
            &copy; 2017 DANA - PT. Espay Debit Indonesia KOE. All Rights
            Reserverd.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/"
        },
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
  }
};
</script>

<style lang="scss" scoped>
.app-footer {
  background: $azureRadiance;
  font-size: 0.75rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 2rem;

  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }

  > *,
  a {
    color: $white;
  }
}

.list--flex {
  $this: &;
  text-align: center;

  @media screen and (min-width: 1023px) {
    text-align: left;
  }

  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1rem;

    @media screen and (min-width: 1023px) {
      & {
        justify-content: flex-start;
      }
    }
  }

  &-item {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.list--flex-list.menu-list {
  @media screen and (min-width: 1023px) {
    justify-content: flex-end;
    margin-right: -1rem;
  }
}

.copyright {
  margin-top: 1rem;
  text-align: center;
  @media screen and (min-width: 1023px) {
    text-align: right;
  }
}

.cols {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1023px) {
    flex-direction: row;
  }
}

.cols-item {
  flex: 1;
}
</style>
