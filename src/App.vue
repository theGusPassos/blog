<template>
  <div id="app">
    <Header></Header>
    <router-view class="router-body"></router-view>
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
  margin: 0;
  font-family: "Montserrat";
}

.router-body {
  padding: 6% 8%;
}
</style>
