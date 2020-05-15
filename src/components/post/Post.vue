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
import {
  getPostByTitle,
  getPostTitleFromUrl,
  getUrlWithPostFolder
} from "@/services/postService";
import Post from "@/models/post";
import { formatMdFile } from "../../services/mdFormatter";

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
          this.postMdFile = formatMdFile(
            file,
            getUrlWithPostFolder(
              window.location.origin + "/blog",
              this.post?.folder
            )
          );
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
    font-size: 1.9em;
    margin: 0;
  }

  img {
    max-width: 100% !important;
    margin: auto;
    border-radius: 10px;
  }

  p:first-of-type {
    font-size: 1.3em;
    margin: 0;
  }

  p {
    display: flex;
    font-size: 1.4em;
    line-height: 1.5;
  }
}
</style>
