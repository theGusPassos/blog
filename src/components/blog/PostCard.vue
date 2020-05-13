<template>
  <section v-on:click="onCardClick">
    <div class="padded-info">
      <h1>{{ post.title }}</h1>
      <span>{{ post.date | formatDate }}</span>
    </div>
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
  border-radius: 10px;
  box-shadow: 0 0 3px 0px #00000075;
  margin-top: 20px;
}

section:hover,
section:active {
  border-radius: 10px;
  background-color: #00000075;
}

h1 {
  margin: 10px 0;
  font-size: 1.4em;
}

.padded-info {
  padding: 10px 20px;
}
</style>
