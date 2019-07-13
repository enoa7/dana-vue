<template>
  <div class="photo">
    <router-link :to="{ name: 'details', params: { id: photoId } }">
      <div class="photo-wrapper">
        <div class="photo-image" :style="{ backgroundImage: `url('${url}')` }">
          <img class="img-fluid" :src="url" alt />
        </div>
        <div class="photo-body is-hidden-widescreen">
          <div class="is-flex">
            <h6 class="photo-title">Photo {{ index + 1 }}</h6>
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
    desc() {
      return this.data.description;
    },
    url() {
      return this.data.urls.regular;
    },
    photoId() {
      return this.data.id;
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
}
</style>


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
