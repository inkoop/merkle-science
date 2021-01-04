<template>
  <div id="app">
    <div class="container">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Table,
  },
};
</script>

<style lang="scss">
:root {
  --color-blue-600: #0283ff;
  --color-grey-white: #fdfeff;
  --color-grey-1: #ecf2f9;
  --color-grey-2: #d3dde9;
  --color-grey-4: #8a98a8;
  --color-grey-5: #606d7c;
  --color-grey-9: #12181f;

  --container-width: 1040px;

  --font-primary: "Inter", sans-serif;
  --font-secondary: "IBM Plex Sans", sans-serif;
}

#app {
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: var(--container-width);
  margin: 120px auto;
}
</style>
