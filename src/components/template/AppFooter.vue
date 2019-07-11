<template>
  <div class="app-footer">
    <div class="container">
      <div class="columns">
        <div class="column column--left">
          <div>Follow Us</div>
          <ul class="sosmed-list">
            <li>
              <img src="@/assets/image/facebook.png" alt="facebook" />
            </li>
            <li>
              <img src="@/assets/image/instagram.png" alt="instagram" />
            </li>
            <li>
              <img
                src="@/assets/image/twitter-logo-silhouette.png"
                alt="twitter"
              />
            </li>
          </ul>
        </div>
        <div class="column">
          <nav>
            <ul class="menu">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
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
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style lang="scss" scoped>
.app-footer {
  background: #108ee9;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 2rem;
  font-size: 0.75rem;

  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }
}

.menu {
  font-size: 0.75rem;
  text-align: center;
  margin-left: -1rem;
  margin-right: -1rem;
  @media screen and (min-width: 769px) {
    font-size: 1rem;
  }

  > li {
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (min-width: 769px) {
    text-align: right;
    li {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}

.sosmed-list {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
    li {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}

.columns {
  color: $white;
  //   padding-left: 1.5rem;
  //   padding-right: 1.5rem;
  align-items: center;
}
.column--left {
  text-align: center;
  @media screen and (min-width: 769px) {
    text-align: left;
  }
}

.copyright {
  margin-top: 1rem;
  text-align: center;
  @media screen and (min-width: 769px) {
    text-align: right;
  }
}
</style>
