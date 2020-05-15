<template>
  <nav>
    <div class="link-wrapper">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
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
}

.link-wrapper {
  display: inline-flex;
  margin: auto;
  width: 50%;
  max-width: 500px;

  a {
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