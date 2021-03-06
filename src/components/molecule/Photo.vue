<template>
  <div class="photo">
    <router-link :to="{ name: 'details', params: { id: photoId } }">
      <div class="photo-wrapper">
        <div class="photo-image" :style="{ backgroundImage: `url('${url}')` }">
          <img class="img-fluid" :src="url" alt />
        </div>
        <div class="photo-meta mobile is-hidden-mobile">
          <div class="photo-like" @click="toggleLike">
            <div>
              <i v-if="isLiked" class="fa fa-heart"></i>
              <i v-else class="fa fa-heart-o"></i>
            </div>
            <div>{{ getLikes }}</div>
          </div>
        </div>
        <div class="photo-body mobile is-hidden-mobile">
          <h6 class="photo-title">{{ title }}</h6>
          <div class="photo-desc">{{ desc }}</div>
        </div>
        <div class="photo-body is-hidden-widescreen">
          <div class="is-flex">
            <h6 class="photo-title">{{ title }}</h6>
            <div class="photo-meta">
              <div class="photo-share" @click="toggleSosmed">
                <i class="fa fa-share-alt"></i>
              </div>
              <div class="photo-like" @click="toggleLike">
                <i v-if="isLiked" class="fa fa-heart"></i>
                <i v-else class="fa fa-heart-o"></i>
              </div>
              <SocialMedia :is-shown="showSosmed" />
            </div>
          </div>
          <div class="photo-desc">{{ desc }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import SocialMedia from "@/components/molecule/SocialMedia";
import VueTypes from "vue-types";
export default {
  name: "Photo",
  components: { SocialMedia },
  props: {
    data: VueTypes.any.def({}),
    index: VueTypes.oneOfType([String, Number])
  },
  data() {
    return {
      isLiked: false,
      showSosmed: false
    };
  },
  computed: {
    title() {
      return this.data.alt_description
        ? this.data.alt_description
        : "Title  goes here...";
    },
    desc() {
      if (this.data.description) {
        return this.$options.filters.truncate(
          this.data.description,
          "20",
          "..."
        );
      } else {
        return "Description goes here...";
      }
    },
    url() {
      return this.data.urls.regular;
    },
    photoId() {
      return this.data.id;
    },
    getLikes() {
      return this.data.likes;
    }
  },
  mounted() {
    // console.log("this data => ", this.data)
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

<style lang="scss">
.photo-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &.mobile {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;

    padding: 0.5rem;

    .photo-like {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      > *,
      .fa {
        color: $white;
      }

      > div:nth-child(2) {
        padding-left: 0.25rem;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.photo {
  // margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: $shadow;
  a {
    color: $text-color;
  }
}

.photo-wrapper {
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
  }

  &:hover:after {
    background: rgba(0, 0, 0, 0.3);
  }

  &:hover {
    .photo-body.mobile {
      bottom: 0;
    }
  }
}

.photo-body {
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

  &.mobile {
    position: absolute;
    transition: 0.5s;
    bottom: -6rem;
    z-index: 11;
    color: $white;
  }
}
.photo-title {
  font-size: 1.125rem;
}
.photo-body > .is-flex {
  justify-content: space-between;
  align-items: center;
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
    // width: 301px;
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
