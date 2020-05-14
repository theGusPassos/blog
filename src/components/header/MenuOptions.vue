<template>
  <nav v-bind:class="{ active: showMenu,  }">
    <a href="/">blog</a>
    <a href="/">my portfolio</a>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuOptions",
  props: ["showMenu"]
});
</script>

<style lang="scss">
@import "../../styles/colors.scss";

nav {
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.4s;
  transition-timing-function: ease;

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

.active {
  height: 90px;
}
</style>