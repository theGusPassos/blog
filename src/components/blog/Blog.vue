<template>
  <section>
    <input type="text" placeholder="search posts by title or theme =)" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Blog"
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

input {
  border: none;
  border-bottom: 1px solid $main-color;
  width: 100%;
  font-size: 1.3em;
  outline: none;
  padding-bottom: 5px;
}
</style>