<template>
  <section v-on:click="onCardClick">
    <h1>{{ post.title }}</h1>
    <span>{{ post.date | formatDate }}</span>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { getPostTitleAsUrl } from "../../functions/routeParamFunctions";
export default Vue.extend({
  name: "PostCard",
  props: ["post"],
  methods: {
    onCardClick() {
      this.$router.push(`/post/${getPostTitleAsUrl(this.post.title)}`);
    }
  }
});
</script>

<style lang="scss" scoped>
section {
  margin-top: 20px;
}

section:hover,
section:active {
  cursor: pointer;
}

h1 {
  margin: 10px 0;
  font-size: 1.4em;
}
</style>
