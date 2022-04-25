<template>
  <div class="container">
    <div class="row center mb-60">
      <AutocompleteField />
    </div>

    <transition name="fade">
      <TodayForecast
        class="row mb-30"
        v-if="currentLocation !== null && currentForecast !== null"
      />
    </transition>

    <transition name="fade">
      <NextForecast class="row" v-if="dailyForecast.length > 0" />
    </transition>

    <transition name="fade">
      <div class="row center" v-if="message !== null">
        <p>{{ message }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import AutocompleteField from "@/components/AutocompleteField.vue";
import TodayForecast from "@/pages/main/components/TodayForecast.vue";
import NextForecast from "@/pages/main/components/NextForecast.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "index-page",
  components: { AutocompleteField, TodayForecast, NextForecast },
  computed: {
    ...mapState([
      "currentLocation",
      "currentForecast",
      "dailyForecast",
      "message",
    ]),
  },
  methods: {
    ...mapActions(["populatePreviousLocations"]),
  },
  created() {
    this.populatePreviousLocations();
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 80px 60px;
  margin: 0 auto;
  box-sizing: border-box;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &.center {
      justify-content: center;
    }

    &.mb-60 {
      margin-bottom: 60px;
    }

    &.mb-30 {
      margin-bottom: 30px;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    padding: 80px 20px;
  }
}

@media only screen and (max-width: 900px) {
  .container {
    padding: 80px 10px;
  }
}

@media only screen and (max-width: 650px) {
  .container {
    padding: 20px 10px;

    .row {
      &.mb-60 {
        margin-bottom: 20px;
      }

      &.mb-30 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
