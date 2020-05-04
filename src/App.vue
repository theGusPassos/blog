<template>
  <div id="app">
    <Header></Header>
    <div class="router-body">
      <Post />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Post from "@/components/post/Post.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Post
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
  padding: 3% 8%;
}
</style>
