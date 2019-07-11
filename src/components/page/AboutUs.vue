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
.title {
  letter-spacing: 1.12px;
  color: rgba(68, 68, 68, 0.9);
}
</style>
