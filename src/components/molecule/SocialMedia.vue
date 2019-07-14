<template>
  <transition name="modal-fade">
    <div v-if="isShown" class="photo-social">
      <div class="social-item">
        <div class="social-icon">
          <i class="fa fa-instagram fa-2x"></i>
        </div>
        <div class="social-name">Instagram</div>
      </div>
      <div class="social-item">
        <div class="social-icon">
          <i class="fa fa-facebook-official fa-2x"></i>
        </div>
        <div class="social-name">facebook</div>
      </div>
      <div class="social-item">
        <div class="social-icon">
          <i class="fa fa-twitter fa-2x"></i>
        </div>
        <div class="social-name">Twitter</div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "SocialMedia",
  props: {
    isShown: VueTypes.bool.def(false)
  }
};
</script>

<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.photo-social {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 0;
  background: $white;
  border-radius: 0.5rem;
  box-shadow: $shadow;
  top: -5rem;
}

.social-item {
  text-align: center;
  margin: 0.5rem;

  .social-name {
    font-size: 0.75rem;
  }
}
</style>
