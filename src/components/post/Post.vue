<template>
  <section>
    <img src="../../static/post.jpg" alt="jumping" />
    <h1>2D animation in Unity with different sprite sizes</h1>
    <div class="post-info">
      <span>Gustavo Passos</span>
      <span>25/04/2020</span>
    </div>

    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisi vitae odio scelerisque, eu viverra nulla pharetra. Quisque eu ultrices sapien. Maecenas eget tempor arcu.</p>
      <p>Nullam rutrum erat a ante dapibus egestas. Mauris eu nisi sed eros dictum fermentum. Nullam finibus, sapien vulputate pellentesque dignissim, sapien ex feugiat tellus, in euismod turpis sem pellentesque orci. Maecenas placerat ullamcorper neque.</p>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Post"
});
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0;
}

img {
  width: 100%;
  border-radius: 10px;
}

.post-info {
  margin: 10px 0px;

  span {
    display: block;
  }
}

p {
  font-size: 1.1em;
  line-height: 1.5;
}
</style>