<template>
  <div class="hamburger-icon">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MenuIcon",
});
</script>

<style lang="scss" scoped>
.hamburger-icon {
  width: 40px;
  float: right;

  div {
    background: #fff;
    width: 100%;
    height: 4px;
    margin: 7px 0;
  }
}
</style>
