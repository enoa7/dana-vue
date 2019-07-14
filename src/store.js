import Vue from "vue";
import Vuex from "vuex";
import api from "@/apiConfig.json";
import Axios from "axios";
import localforage from "localforage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: null,
    photos: null,
    selectedPhoto: null
  },
  getters: {
    PHOTOS: state => {
      return state.photos;
    },
    PAGE: state => {
      return state.page;
    },
    SELECTED_PHOTO: state => {
      return state.selectedPhoto;
    }
  },
  mutations: {
    SET_PHOTOS: (state, payload) => {
      state.photos = payload;
    },
    SET_SELECTEDPHOTO: (state, payload) => {
      state.selectedPhoto = payload;
    },
    SET_PAGE: (state, payload) => {
      state.page = payload;
    }
  },
  actions: {
    GET_PHOTOS: async (context, page = 1) => {
      try {
        let { data } = await Axios.get(
          `${api.curatedPhotos}?&per_page=8&page=${page}&${api.client_id}`
        );
        context.commit("SET_PHOTOS", data);
        context.commit("SET_PAGE", page);

        localforage.setItem("photos", data);
      } catch (err) {
        console.log("get photos => ", err);
      }
    },
    GET_PHOTO: async (context, photoId) => {
      try {
        const { data } = await Axios.get(
          `${api.getPhoto}/${photoId}?${api.client_id}`
        );
        context.commit("SET_SELECTEDPHOTO", data);
        localforage.setItem("selectedPhoto", data);
      } catch (err) {
        console.log("get photo aja => ", err);
      }
    }
  }
});
