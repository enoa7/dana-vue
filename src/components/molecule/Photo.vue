<template>
  <div class="photo">
    <div class="photo-wrapper">
      <div
        class="photo-image"
        v-bind:style="{ backgroundImage: `url('${url}')` }"
      >
        <img class="img-fluid" :src="url" alt />
      </div>
      <div class="photo-body is-hidden-widescreen">
        <div class="is-flex">
          <h6 class="photo-title">Photo {{ index + 1 }}</h6>
          <div class="photo-meta">
            <div class="photo-share" v-on:click="toggleSosmed">
              <i class="fa fa-share-alt"></i>
            </div>
            <div class="photo-like" v-on:click="toggleLike">
              <i class="fa fa-heart" v-if="isLiked"></i>
              <i class="fa fa-heart-o" v-else></i>
            </div>
            <SocialMedia :isShown="showSosmed" />
          </div>
        </div>
        <div class="photo-desc">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from "@/components/molecule/SocialMedia";

export default {
  name: "Photo",
  props: ["data", "index"],
  components: { SocialMedia },
  data() {
    return {
      isLiked: false,
      showSosmed: false
    };
  },
  computed: {
    desc() {
      return this.data.description;
    },
    url() {
      return this.data.urls.regular;
    }
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
    toggleSosmed() {
      this.showSosmed = !this.showSosmed;
    }
  }
};
</script>

<style lang="scss" scoped>
.photo {
  // margin-bottom: 1rem;
}
.photo-body {
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
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
  padding-bottom: 1rem;
}

.photo-image {
  background: none;
  img {
    display: block;
  }
  @media screen and (min-width: 1216px) {
    background: inherit;
    width: 301px;
    height: 226px;
    background-size: cover;

    img {
      display: none;
    }
  }
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
