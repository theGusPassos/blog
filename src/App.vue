<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";

import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {
    Header
  }
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Quicksand";
}
</style>
