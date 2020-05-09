<template>
  <section>
    <div v-if="!loading && post !== undefined">
      <VueShowdown :markdown="postMdFile" class="markdown"></VueShowdown>
    </div>
    <div v-else-if="loading">loading post</div>
    <div v-else-if="error">{{error}}</div>
    <div v-else>post not found</div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {
  getPostTitleUrlAsTitle,
  getPostTitleAsUrl
} from "@/functions/routeParamFunctions";
import { getPostByTitle, getPostTitleFromUrl } from "@/services/postService";
import Post from "@/models/post";

export default Vue.extend({
  name: "Post",
  data() {
    return {
      loading: false,
      error: null,
      postMdFile: {},
      post: getPostByTitle(getPostTitleFromUrl(this.$route.params.title))
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      if (this.post === undefined) return;

      this.loading = true;
      fetch(`posts/${this.post?.folder}/post.md`)
        .then(request => request.text())
        .then(file => {
          this.postMdFile = file;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.error = error;
        });
    }
  }
});
</script>

<style lang="scss">
.markdown {
  h1 {
    margin: 0;
  }

  img {
    width: 100% !important;
    border-radius: 10px;
  }

  p:first-of-type {
    margin: 0;
  }

  p {
    font-size: 1.1em;
    line-height: 1.5;
  }
}
</style>
