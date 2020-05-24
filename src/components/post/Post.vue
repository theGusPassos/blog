<template>
  <section>
    <div v-if="!loading && post !== undefined">
      <VueShowdown :markdown="postMdFile" class="markdown"></VueShowdown>
    </div>
    <div v-else-if="loading">loading post</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>post not found</div>
    <Comments :issueId="post.issueId"></Comments>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Comments from "./Comments.vue";
import {
  getPostTitleUrlAsTitle,
  getPostTitleAsUrl
} from "@/functions/routeParamFunctions";
import {
  getPostByTitle,
  getPostTitleFromUrl,
  getUrlWithPostFolder,
  getPostMdFile
} from "@/services/postService";
import Post from "@/models/post";
import { formatMdFile } from "../../services/mdFormatter";

export default Vue.extend({
  name: "Post",
  components: { Comments },
  data() {
    return {
      loading: false,
      error: null,
      postMdFile: {},
      post: getPostByTitle(getPostTitleFromUrl(this.$route.params.title))
    };
  },
  async created() {
    await this.fetchPost();
  },
  methods: {
    async fetchPost() {
      if (this.post === undefined) return;

      this.loading = true;

      try {
        this.postMdFile = await getPostMdFile(this.post?.folder);
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>

<style lang="scss">
.markdown {
  h1 {
    line-height: 1.2;
    font-size: 1.9em;
    margin: 0;
  }

  h2 {
    margin: 25px 0 0 0;
  }

  img {
    max-width: 100% !important;
    margin: auto;
    border-radius: 10px;
    display: flex;
  }

  p,
  ul {
    margin-top: 0;
  }

  p:first-of-type {
    font-size: 1.1em;
    margin: 0 0 35px 0;
  }

  ul li,
  p {
    font-size: 1.2em;
  }
}
</style>
