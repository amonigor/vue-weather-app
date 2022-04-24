<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card-component",
};
</script>

<style scoped lang="scss">
.card-container {
  background-color: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  padding: 30px;
  border-radius: 12px;
  box-sizing: border-box;
}

@media only screen and (max-width: 500px) {
  .card-container {
    padding: 30px 20px;
  }
}
</style>
