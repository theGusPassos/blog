<template>
  <section>
    <span class="comment-info">
      You can leave comments to this post in this
      <a
        :href="'https://github.com/theGusPassos/blog/issues/' + issueId"
        target="_blank"
        rel="noreferrer nofollow"
      >github issue</a>.
    </span>
    <div v-if="comments.length > 0">
      <h3>{{comments.length}} comment{{ comments.length > 1 ? 's' : '' }}</h3>
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <div>
          <img v-bind:src="comment.user.avatar_url" alt="user's github avatar" />
          <span>{{ comment.user.login }}</span>
          <time :datetime="comment.created_at">{{ comment.created_at | formatDate }}</time>
        </div>

        <span>{{comment.body}}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { getComments } from "@/services/commentsService";

export default Vue.extend({
  name: "Comments",
  props: ["issueId"],
  data() {
    return { comments: {} };
  },
  async created() {
    this.comments = await getComments(this.issueId);
  }
});
</script>

<style lang="scss" scoped>
section {
  font-size: 1.1em;
}

.comment-info {
  display: block;
  margin-top: 40px;
}

h3 {
  margin: 0;
}

.comment {
  margin: 20px 0;

  img {
    width: 20%;
    max-width: 80px;
  }
}
</style>