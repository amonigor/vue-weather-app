import axios from "axios";

export default {
  async searchLocation({ commit, dispatch }, address) {
    // Setting loading message
    commit("setMessage", "Carregando...");

    // Reseting data
    commit("setCurrentLocation", null);
    commit("setCurrentForecast", null);
    commit("setDailyForecast", []);

    // Searching in geocoding API the coordinates
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
          // Clear the loading message
          commit("setMessage", null);

          // Setting data
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

        // Error handling
        commit("setMessage", "Não foi possível achar a localização informada.");
      })
      .catch(() => {
        // Error handling
        commit("setMessage", "Não foi possível achar a localização informada.");
      });
  },

  async searchForecast({ commit }, coordinates) {
    // Setting loading message
    commit("setMessage", "Carregando...");

    // Reseting data
    commit("setCurrentForecast", null);
    commit("setDailyForecast", []);

    // Searching in open weather API the forecast
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
          // Clear the loading message
          commit("setMessage", null);

          // Setting data
          commit("setCurrentForecast", res.data.current);
          commit("setDailyForecast", res.data.daily);
          return;
        }

        // Error handling
        commit("setMessage", "Não foi possível carregar a previsão.");
      })
      .catch(() => {
        // Error handling
        commit("setMessage", "Não foi possível carregar a previsão.");
      });
  },

  savePreviousLocations({ state }) {
    // Saving previous locations in the local storage
    // in JSON format
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
