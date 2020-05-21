<template>
  <section>
    <span class="where-to-comment-info">
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
        </div>
        <div class="comment-info-wrapper">
          <div class="comment-info">
            <span>{{ comment.user.login }}</span>
            <time :datetime="comment.created_at">{{ comment.created_at | formatDate }}</time>
          </div>
          <span>{{comment.body}}</span>
        </div>
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

.where-to-comment-info {
  display: block;
  margin: 40px 0;
}

h3 {
  margin: 0;
}

.comment {
  display: flex;
  margin: 0 0 35px 0;

  img {
    max-width: 70px;
  }
}

.comment-info-wrapper {
  padding-left: 15px;
}

.comment-info {
  span {
    display: block;
    font-weight: bold;
  }

  time {
    display: block;
    font-size: 0.9em;
  }
}
</style>