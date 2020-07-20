<template>
  <div>
    <section>
      <p>
        This blog porpuse is to share knowledge that might be useful for other
        <strong>software and game developers</strong>.
      </p>
      <p>
        I have a
        <a
          href="https://theguspassos.github.io/"
          target="_blank"
          rel="noreferrer nofollow"
        >personal website</a>
        with my contacts and portfolio if you’re interested.
      </p>
      <p>Feel free to get in touch =)</p>
    </section>
    <section>
      <p>
        this website logo was made by
        <a href="https://www.instagram.com/xkobita/">xkobita</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
  created() {
    this.$ga.page(this.$router);
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

section {
  padding: 40px 0;
}

p {
  font-size: 1.2em;
}
</style>
