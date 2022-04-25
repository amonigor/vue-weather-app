export default {
  /** Current Location Mutations */
  setCurrentLocationFromAPI(state, payload) {
    state.currentLocation = {
      address: payload.formatted_address,
      coordinates: {
        lat: payload.geometry.location.lat,
        lng: payload.geometry.location.lng,
      },
    };
  },
  setCurrentLocation(state, payload) {
    state.currentLocation = payload;
  },

  /** Previous Locations Mutations */
  addPreviousLocations(state, payload) {
    const location = {
      term: payload.term,
      address: payload.formatted_address,
      coordinates: {
        lat: payload.geometry.location.lat,
        lng: payload.geometry.location.lng,
      },
    };

    state.previousLocations.push(location);
  },

  /** Forecast Mutations */
  setCurrentForecast(state, payload) {
    state.currentForecast = payload;
  },
  setDailyForecast(state, payload) {
    state.dailyForecast = payload;
  }
};
