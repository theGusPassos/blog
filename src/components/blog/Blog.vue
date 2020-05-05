<template>
  <section>
    <input type="text" placeholder="search posts by title or theme =)" />

    <PostCard v-for="post in posts" :key="post.id" post="post"></PostCard>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Post from "@/models/post.ts";
import PostCard from "./PostCard.vue";

const defaultPost: Post = {
  id: 1,
  title: "2D animation in unity with different sprite sizes",
  author: "Gustavo Passos",
  date: new Date(),
  image: ""
};

export default Vue.extend({
  name: "Blog",
  components: {
    PostCard
  },
  data: () => {
    return { posts: [defaultPost, defaultPost] };
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

input {
  border: none;
  border-bottom: 1px solid $main-color;
  width: 100%;
  font-size: 1.3em;
  outline: none;
  padding-bottom: 5px;
}
</style>