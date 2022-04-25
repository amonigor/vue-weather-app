import Vue from "vue";
import Vuex from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLocation: null,
    previousLocations: [],
    currentForecast: null,
    dailyForecast: [],
    message: null,
  },
  mutations,
  actions,
});
