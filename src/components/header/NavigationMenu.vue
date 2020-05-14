<template>
  <nav>
    <router-link to="/">home</router-link>
    <a href="https://theguspassos.github.io/" target="_blank" rel="noopener noreferrer">about</a>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationMenu"
});
</script>

<style lang="scss">
@import "../../styles/colors.scss";

nav {
  display: flex;
  width: 100%;

  a {
    background-color: $main-color;
    transition: background-color 0.5s;
    color: $main-text-color;
    text-align: center;
    width: 100%;
    font-size: 1.2em;
    padding: 10px 0;
    text-decoration: none;
  }

  a:hover,
  a:active {
    background-color: $main-color-hover;
  }
}
</style>