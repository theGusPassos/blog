<template>
  <section>
    <h1>{{post.title}}</h1>

    <h2>test</h2>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PostCard",
  props: ["post"]
});
</script>

<style lang="scss" scoped>
</style>