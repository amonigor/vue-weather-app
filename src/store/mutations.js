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
  addPreviousLocationsFromAPI(state, payload) {
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
  addPreviousLocationsFromLocalStorage(state, payload) {
    state.previousLocations.push(payload);
  },

  /** Forecast Mutations */
  setCurrentForecast(state, payload) {
    state.currentForecast = payload;
  },
  setDailyForecast(state, payload) {
    state.dailyForecast = payload;
  },

  /** Message Mutation */
  setMessage(state, payload) {
    state.message = payload;
  }
};
