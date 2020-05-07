<template>
  <section v-if="!loading">
    <VueShowdown :markdown="postMdFile" class="markdown"></VueShowdown>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {
  getPostByTitle,
  getPostTitleUrlAsTitle,
} from "@/functions/routeParamFunctions.ts";
import Post from "@/models/post";

export default Vue.extend({
  name: "Post",
  data() {
    return {
      loading: true,
      postMdFile: {},
      post: getPostByTitle(""),
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      this.loading = true;
      fetch("posts/1_2d_animation_in_unity_with_different_sprite_sizes/post.md")
        .then((request) => request.text())
        .then((file) => {
          this.postMdFile = file;
          console.log(this.postMdFile);
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
  },
});
</script>

<style lang="scss">
.markdown {
  h1 {
    margin: 0;
  }

  :first-child {
    margin: 0;
  }

  img {
    width: 100% !important;
    border-radius: 10px;
  }

  p {
    font-size: 1.1em;
    line-height: 1.5;
  }
}
</style>
