<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque
          finibus nibh urna, vitae tincidunt tortor imperdiet sed. Morbi arcu
          sem, luctus nec congue ut, egestas ac orci. Donec ac vestibulum odio,
          nec imperdiet tellus.
        </p>
      </div>
      <div class="column">
        <img src="@/assets/image/rainy@3x.png" alt="rainy" />
      </div>
    </div>
    <h2 class="title is-2 text-center">Lorem Ipsum</h2>
    <div class="columns py-5">
      <div v-for="(val, index) in 4" :key="index" class="column">
        <div class="card card--transparent">
          <div class="card-header">
            <div class="card-image">
              <figure class="image">
                <img src="@/assets/image/arrow@2x.png" alt />
              </figure>
            </div>
          </div>
          <div class="card-body">
            <div class="card-title">Lorem Ipsum</div>
            <div class="card-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur
              leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet
              sed.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.columns {
  align-items: center;
  justify-content: space-between;
}

.column {
  // padding-left: 1rem;
  // padding-right: 1rem;
}

.title {
  letter-spacing: 1.12px;
  color: rgba(68, 68, 68, 0.9);
}

.card--transparent {
  border: 0;
  box-shadow: none;
  .card-header {
    border: 0;
    box-shadow: none;
    justify-content: center;
    align-items: center;
  }

  .card-title {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .card-image {
    width: 64px;
    height: 64px;

    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }

  .card-body {
    text-align: center;
  }

  .card-detail {
    font-size: 0.875rem;
    letter-spacing: 0.67px;
  }
}

.text-center {
  text-align: center;
}

.py-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
