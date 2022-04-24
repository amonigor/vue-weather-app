<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from "@/pages/main/Index.vue";

export default {
  name: "App",
  components: { IndexPage },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

body {
  padding: 0;
  margin: 0;
  background-image: linear-gradient(to bottom, #2868b4, #143a67);
  width: 100%;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
}
</style>
