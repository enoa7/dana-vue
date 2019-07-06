<template>
  <div class="photo">
    <div class="photo-wrapper">
      <div class="photo-image">
        <img class="img-fluid" :src="data.url" alt />
      </div>
      <div class="photo-body">
        <div class="is-flex">
          <h6 class="photo-title">Photo {{ data.id }}</h6>
          <div class="photo-meta">
            <div class="photo-share">
              <i class="fa fa-share-alt"></i>
            </div>
            <div class="photo-like" v-on:click="toggleLike">
              <i class="fa fa-heart" v-if="isLiked"></i>
              <i class="fa fa-heart-o" v-else></i>
            </div>
          </div>
        </div>
        <div class="photo-desc">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: ["data"],
  data() {
    return {
      isLiked: false
    };
  },
  computed: {
    desc() {
      return this.data.title;
    }
  },
  methods: {
    toggleLike() {
      console.log("liekd!!", this.isLiked);
      this.isLiked = !this.isLiked;
    }
  }
};
</script>

<style lang="scss" scoped>
.photo {
  margin-bottom: 1rem;
}
.photo-body {
  padding-left: 1rem;
  padding-right: 1rem;
}
.photo-title {
  font-size: 1.125rem;
}
.photo-body > .is-flex {
  justify-content: space-between;
  align-items: center;
}
.photo-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
.photo-desc {
  padding-top: 0.5rem;
}

.fa-share-alt {
  &:hover {
    color: $link;
  }
}
.fa-heart-o {
    color: #666;
}
.fa-heart {
  color: $danger;
}
</style>
