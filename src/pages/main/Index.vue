<template>
  <div class="container">
    <div class="row center mb-60">
      <AutocompleteField />
    </div>
    <TodayForecast class="row mb-30" />
    <NextForecast class="row" />
  </div>
</template>

<script>
import AutocompleteField from "@/components/AutocompleteField.vue";
import TodayForecast from "@/pages/main/components/TodayForecast.vue";
import NextForecast from "@/pages/main/components/NextForecast.vue";

export default {
  name: "index-page",
  components: { AutocompleteField, TodayForecast, NextForecast },
};
</script>

<style scoped lang="scss">
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
