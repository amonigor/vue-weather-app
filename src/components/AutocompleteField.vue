<template>
  <div class="field-container">
    <input
      type="text"
      placeholder="Pesquise uma cidade"
      v-model="location"
      @focus="showSuggestions = true"
      @focusout="showSuggestions = false"
      @input="filterSuggestions"
    />
    <button @click.prevent="getForecast">
      <img src="@/assets/img/search.svg" alt="lupa" />
    </button>

    <ul class="suggestions" v-if="suggestions.length > 0 && showSuggestions">
      <li
        class="suggestion"
        v-for="(suggestion, idx) in suggestions.slice(0, 5)"
        :key="idx"
      >
        <a href="#">{{ suggestion.term }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "autocomplete-field",
  data() {
    return {
      location: "São Vicente",
      showSuggestions: false,
      suggestions: [],
    };
  },
  computed: {
    ...mapState(["currentLocation", "previousLocations"]),
  },
  methods: {
    ...mapMutations(["setCurrentLocation"]),
    ...mapActions(["searchLocation", "searchForecast"]),

    /** APIs functions */
    filterSuggestions: function () {
      // Filter the suggestions by the search term
      const newSuggestions = this.previousLocations.filter((location) => {
        const term = this.standardizeWord(this.location);
        const suggestion = this.standardizeWord(location.term);
        return suggestion.indexOf(term) !== -1;
      });

      this.suggestions = newSuggestions;
    },
    searchInSuggestions: function () {
      // Return the suggestion element or undefined
      return this.suggestions.find(
        (suggestion) => suggestion.term === this.location
      );
    },
    getForecast: async function () {
      // Search for the location given in the suggestions
      const suggestion = this.searchInSuggestions();

      // If is not in the suggestions, will search on the API
      if (suggestion !== undefined) {
        this.setCurrentLocation(suggestion);
      } else {
        await this.searchLocation(this.location);
      }

      // Finally, if is a valid locaiton, will search the forecast
      if (this.currentLocation !== null) {
        this.searchForecast(this.currentLocation.coordinates);
      }
    },

    /** Helpers */
    standardizeWord: function (word) {
      // Remove all the special chars to be easy to avoid errors
      return word
        .replace(/[ÀÁÂÃÄÅ]/, "A")
        .replace(/[àáâãäå]/, "a")
        .replace(/[ÈÉÊË]/, "E")
        .replace(/[Ç]/, "C")
        .replace(/[ç]/, "c")
        .replace(/[^a-z0-9]/gi, "")
        .toLowerCase();
    },
  },
};
</script>

<style scoped lang="scss">
.field-container {
  position: relative;
  width: 400px;
  box-sizing: border-box;

  input {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    padding: 20px 50px 20px 20px;
    box-sizing: border-box;
    width: 400px;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: transparent;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    color: #ffffff;
  }

  button {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    top: 14px;
    right: 10px;

    &:focus,
    &:active,
    &:hover {
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.25) 100%
      );
    }

    img {
      width: 1rem;
      height: 1rem;
    }
  }

  .suggestions {
    position: absolute;
    list-style: none;
    padding: 10px 0;
    background-color: #2868b4;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.25) 100%
    );
    width: 400px;
    border-radius: 12px;
    margin: 5px 0;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);

    .suggestion {
      font-size: 1rem;
      padding: 10px 20px;

      a {
        text-decoration: none;
        color: #ffffff;
        display: inline-block;
        width: 100%;
      }

      &:hover {
        background-color: #ffffff;

        a {
          color: #a8a8a8;
        }
      }
    }
  }
}

::-webkit-input-placeholder {
  color: #ffffff;
  opacity: 1;
}
::-moz-placeholder {
  color: #ffffff;
  opacity: 1;
}
::-ms-input-placeholder {
  color: #ffffff;
}
::placeholder {
  color: #ffffff;
}

@media only screen and (max-width: 650px) {
  .field-container {
    width: 100%;

    input {
      width: 100%;
    }

    .suggestions {
      width: 100%;
    }
  }
}
</style>
