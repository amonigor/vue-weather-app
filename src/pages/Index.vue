<template>
  <div class="container">
    <div class="row center">
      <AutocompleteField />
    </div>
  </div>
</template>

<script>
import AutocompleteField from "@/components/AutocompleteField.vue";

export default {
  name: "index-page",
  components: { AutocompleteField },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  overflow-y: auto;
  padding: 80px 60px;
  margin: 0 auto;
  box-sizing: border-box;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;

    .center {
      justify-content: center;
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

@media only screen and (max-width: 500px) {
  .container {
    padding: 20px 10px;
  }
}
</style>
