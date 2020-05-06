<template>
  <section v-on:click="onCardClick">
    <img src="../../static/post.jpg" alt="test" />
    <div class="padded-info">
      <h1>{{ post.title }}</h1>
      <div class="post-info">
        <span>{{ post.date | formatDate }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PostCard",
  props: ["post"],
  methods: {
    onCardClick() {
      this.$router.push("/post/my-first-post");
    }
  }
});
</script>

<style lang="scss" scoped>
section {
  border-radius: 10px;
  box-shadow: 0 0 10px 0px #00000075;
  margin-top: 20px;
}

h1 {
  margin: 10px 0;
  font-size: 1.4em;
}

.padded-info {
  padding: 10px;
}

img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.post-info {
  display: flow-root;

  span {
    display: block;
  }
}
</style>
