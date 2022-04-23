<template>
  <div class="container">
    <p>Página Inicial</p>
  </div>
</template>

<script>
export default {
  name: "index-page",
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1200px;
  max-height: 100vh;
  overflow-y: auto;
  padding: 80px 60px;
  margin: 0 auto;
  box-sizing: border-box;
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
