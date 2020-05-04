<template>
  <div id="app">
    <Header></Header>
    <div class="router-body">
      <Blog />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Blog from "@/components/blog/Blog.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Blog
  }
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "Quicksand";
}

.router-body {
  padding: 6% 8%;
}
</style>
