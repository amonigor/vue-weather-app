import axios from "axios";

export default {
  async searchLocation({ commit, dispatch }, address) {
    commit("setMessage", "Carregando...");
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
          commit("setMessage", null);
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

        commit("setMessage", "Não foi possível achar a localização informada.");
      })
      .catch(() => {
        commit("setMessage", "Não foi possível achar a localização informada.");
      });
  },

  async searchForecast({ commit }, coordinates) {
    commit("setMessage", "Carregando...");
    commit("setCurrentForecast", null);
    commit("setDailyForecast", []);

    await axios
      .get(process.env.VUE_APP_WEATHER_URL, {
        params: {
          lat: coordinates.lat,
          lon: coordinates.lng,
          exclude: "minutely,hourly,alerts",
          units: "metric",
          lang: "pt_br",
          appId: process.env.VUE_APP_WEATHER_API_KEY,
        },
      })
      .then((res) => {
        if (res.statusText === "OK") {
          commit("setMessage", null);
          commit("setCurrentForecast", res.data.current);
          commit("setDailyForecast", res.data.daily);
          return;
        }

        commit("setMessage", "Não foi possível carregar a previsão.");
      })
      .catch(() => {
        commit("setMessage", "Não foi possível carregar a previsão.");
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
