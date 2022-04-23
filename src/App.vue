<template>
  <div id="app">
    <h1>Weather App</h1>
  </div>
</template>

<script>
export default {
  name: "App",
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
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
  }
}
</style>
