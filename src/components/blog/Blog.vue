<template>
  <section>
    <input
      id="postTitle"
      name="postTitle"
      type="text"
      placeholder="search posts by title =)"
      @keyup="getPostsByTitle"
      v-model="searchInput"
    />
    <div v-if="!loading">
      <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Post from "@/models/post.ts";
import PostCard from "./PostCard.vue";
import { getPosts, getPostsByTitle } from "@/data/posts/postLoader.ts";

export default Vue.extend({
  name: "Blog",
  components: {
    PostCard
  },
  methods: {
    getPostsByTitle() {
      this.posts = getPostsByTitle(this.searchInput);
    }
  },
  data() {
    return { posts: getPosts(), searchInput: "", loading: false };
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
