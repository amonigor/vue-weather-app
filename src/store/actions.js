import axios from "axios";

export default {
  async searchLocation({ commit }, address) {
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
          commit("addPreviousLocations", {
            term: address,
            ...res.data.results[0],
          });

          return;
        }

        if (res.data.status === "ZERO_RESULTS") {
          commit("setCurrentLocation", null);
        }
      });
  },
};
