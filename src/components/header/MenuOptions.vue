<template>
  <nav>
    <a href="/">blog</a>
    <a href="/">my portfolio</a>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuOptions"
});
</script>

<style lang="scss">
@import "../../styles/colors.scss";

nav {
  width: 100%;

  a {
    background-color: $main-color;
    color: $main-text-color;
    text-align: center;
    display: block;
    width: 100%;
    font-size: 1.2em;
    padding: 10px 0;
    text-decoration: none;
  }
}
</style>