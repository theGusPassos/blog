<template>
  <section>
    <h1>{{ post.title }}</h1>
    <div class="post-info">
      <span>{{ post.date | formatDate }}</span>
    </div>

    <img src="../../static/post.jpg" alt="jumping" />

    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        vehicula nisi vitae odio scelerisque, eu viverra nulla pharetra. Quisque
        eu ultrices sapien. Maecenas eget tempor arcu.
      </p>
      <p>
        Nullam rutrum erat a ante dapibus egestas. Mauris eu nisi sed eros
        dictum fermentum. Nullam finibus, sapien vulputate pellentesque
        dignissim, sapien ex feugiat tellus, in euismod turpis sem pellentesque
        orci. Maecenas placerat ullamcorper neque.
      </p>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { getPostByTitle } from "@/functions/routeParamFunctions.ts";
import Post from "@/models/post";

export default Vue.extend({
  name: "Post",
  data() {
    return {
      post: getPostByTitle("")
    };
  }
});
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}

img {
  width: 100%;
  border-radius: 10px;
}

.post-info {
  margin: 0 0 10px 0;

  span {
    display: block;
  }
}

p {
  font-size: 1.1em;
  line-height: 1.5;
}
</style>
