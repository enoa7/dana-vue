<template>
  <section class="position-relative">
    <a class="back-button" href="/">
      <i class="fa fa-arrow-left"></i>
    </a>
    <div class="photo-header">
      <div
        class="photo-image"
        :style="{ backgroundImage: `url('${getImage}')` }"
      ></div>
    </div>
    <div class="photo-body p-3">
      <div class="columns is-mobile">
        <div class="column">
          <div class="photo-title">{{ getTitle }}</div>
          <div class="photo-likes">{{ getLikes }} Likes</div>
        </div>
        <div class="column">
          <div class="photo-meta">
            <div class="photo-share" @click="toggleSosmed">
              <i class="fa fa-share-alt fa-lg"></i>
            </div>
            <div class="photo-like" @click="toggleLike">
              <i v-if="isLiked" class="fa fa-heart fa-lg"></i>
              <i v-else class="fa fa-heart-o fa-lg"></i>
            </div>
            <SocialMedia :is-shown="showSosmed" />
          </div>
        </div>
      </div>
      <div class="photo-desc py-3">
        <p>{{ getDesc }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import VueTypes from "vue-types";
import SocialMedia from "@/components/molecule/SocialMedia";
import { mapGetters } from "vuex";
import localforage from "localforage";

export default {
  name: "PhotoDetail",
  components: {
    SocialMedia
  },
  props: {
    id: VueTypes.string.def("")
  },
  data() {
    return {
      isLiked: false,
      showSosmed: false,
      photoData: null
    };
  },
  computed: {
    ...mapGetters(["PHOTOS"]),
    ...mapGetters(["SELECTED_PHOTO"]),
    getPhotoId() {
      return this.id;
    },
    getData() {
      return this.photoData ? this.photoData : this.SELECTED_PHOTO;
    },
    getImage() {
      return this.getData && this.getData.urls.regular;
    },
    getTitle() {
      return "Photo";
    },
    getDesc() {
      return this.getData
        ? this.getData.description
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et iaculis quam. Aenean vel pellentesque velit, et laoreet lectus. Nunc vitae libero interdum tortor lacinia lacinia at et lorem. Quisque interdum purus vitae eros imperdiet placerat. Morbi sit amet nunc dapibus, pretium ante eu, vehicula urna. Mauris efficitur risus pellentesque dictum efficitur. Aliquam erat volutpat. Ut eget elementum tellus. Sed elementum euismod viverra. Praesent varius eros ultrices turpis pellentesque ultricies. Vestibulum vel orci non ante posuere ullamcorper in auctor orci. Vivamus laoreet commodo odio sit amet porttitor. Cras tristique at dui eu sagittis. Sed porta nulla lacus, sit amet efficitur quam egestas at. Proin euismod velit id mauris finibus tempor. In ornare tincidunt nisi, at efficitur nibh sollicitudin in.";
    },
    getLikes() {
      return this.getData && this.getData.likes;
    }
  },
  mounted() {
    localforage.getItem("selectedPhoto").then(resp => {
      if (resp) {
        this.photoData = resp;
      } else {
        this.getPhotoData();
      }
    });
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
    toggleSosmed() {
      this.showSosmed = !this.showSosmed;
    },
    async getPhotoData() {
      if (this.PHOTOS) {
        this.photoData =
          this.PHOTOS && this.PHOTOS.find(e => e.id === this.getPhotoId);
      } else {
        this.$store.dispatch("GET_PHOTO", this.getPhotoId);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-image {
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.photo-title {
  font-size: 1.125rem;
  font-weight: bold;
}

.photo-likes {
  font-size: 0.75rem;
}

.photo-meta {
  justify-content: flex-end;
}
.back-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
}
.position-relative {
  position: relative;
}
</style>
