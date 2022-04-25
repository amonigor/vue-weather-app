import axios from "axios";

export default {
  async searchLocation({ commit, dispatch }, address) {
    commit("setCurrentLocation", null);
    commit("setCurrentForecast", null);
    commit("setDailyForecast", []);

    await axios
      .get(process.env.VUE_APP_GEOCODING_URL, {
        params: {
          address: address,
          key: process.env.VUE_APP_GEOCODING_API_KEY,
          language: "pt-BR",
        },
      })
      .then((res) => {
        if (res.data.status === "OK") {
          commit("setCurrentLocationFromAPI", {
            term: address,
            ...res.data.results[0],
          });
          commit("addPreviousLocationsFromAPI", {
            term: address,
            ...res.data.results[0],
          });
          dispatch("savePreviousLocations");
          return;
        }
      });
  },

  async searchForecast({ commit }, coordinates) {
    commit("setCurrentForecast", null);
    commit("setDailyForecast", []);

    await axios
      .get(process.env.VUE_APP_WEATHER_URL, {
        params: {
          lat: coordinates.lat,
          lon: coordinates.lng,
          exclude: "minutely,hourly,alerts",
          units: "metrics",
          lang: "pt_br",
          appId: process.env.VUE_APP_WEATHER_API_KEY,
        },
      })
      .then((res) => {
        if (res.statusText === "OK") {
          console.log(res.data);
          commit("setCurrentForecast", res.data.current);
          commit("setDailyForecast", res.data.daily);
          return;
        }
      });
  },

  savePreviousLocations({ state }) {
    window.localStorage.setItem(
      "previousLocations",
      JSON.stringify(state.previousLocations)
    );
  },

  populatePreviousLocations({ commit }) {
    const previousLocations = JSON.parse(
      window.localStorage.getItem("previousLocations")
    );

    previousLocations?.forEach((location) => {
      commit("addPreviousLocationsFromLocalStorage", location);
    });
  },
};
