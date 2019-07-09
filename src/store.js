import Vue from "vue";
import Vuex from "vuex";
import api from "@/apiConfig.json";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: null
  },
  getters: {
    PHOTOS: state => {
      return state.photos;
    }
  },
  mutations: {
    SET_PHOTOS: (state, payload) => {
      state.photos = payload;
    }
  },
  actions: {
    GET_PHOTOS: async (context, page = 1) => {
      console.log("context => ", context);
      let { data } = await await Axios.get(
        `${api.image}&per_page=5&page=${page}`
      );
      context.commit("SET_PHOTOS", data);
    }
  }
});
