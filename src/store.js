import Vue from "vue";
import Vuex from "vuex";
import api from "@/apiConfig.json";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: null,
    photos: null
  },
  getters: {
    PHOTOS: state => {
      return state.photos;
    },
    PAGE: state => {
      return state.page;
    }
  },
  mutations: {
    SET_PHOTOS: (state, payload) => {
      state.photos = payload;
    },
    SET_PAGE: (state, payload) => {
      state.page = payload;
    }
  },
  actions: {
    GET_PHOTOS: async (context, page = 1) => {
      let { data } = await await Axios.get(
        `${api.image}&per_page=8&page=${page}`
      );
      context.commit("SET_PHOTOS", data);
      context.commit("SET_PAGE", page);
    }
  }
});
