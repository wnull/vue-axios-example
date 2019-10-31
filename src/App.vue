<template>
  <main id="app">
    <Cars />
  </main>
</template>

<script>
import Cars from "./components/Cars.vue";

export default {
  name: "app",
  components: {
    Cars
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
