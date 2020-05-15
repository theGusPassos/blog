<template>
  <section>
    <p>This blog porpuse is to share knowledge that might be useful for other software developers.</p>
    <p>
      I have a
      <a
        href="https://theguspassos.github.io/"
        target="_blank"
        rel="noreferrer nofollow"
      >personal website</a> with my contacts and portfolio if you’re interested.
    </p>
    <p>Feel free to get in touch =)</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About"
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

p {
  font-size: 1.2em;
  padding: 5px 0;
}

a {
  color: $main-color;
  font-weight: bold;
}
</style>