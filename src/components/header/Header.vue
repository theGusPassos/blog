<template>
  <header>
    <div class="title">
      <span>
        <strong>AcaDev Blog</strong>
      </span>
      <span>by Gustavo Passos</span>
    </div>
    <MenuIcon></MenuIcon>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import MenuIcon from "./MenuIcon.vue";

export default Vue.extend({
  name: "Header",
  components: {
    MenuIcon
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

header {
  background: $main-color;
  color: $main-text-color;
  padding: 4% 8%;
  display: flow-root;
  box-shadow: 0 0 15px black;
}

.title {
  float: left;

  span {
    display: block;
  }

  :first-child strong {
    font-size: 1.5em;
  }

  :nth-child(2) {
    font-size: 0.9em;
  }
}
</style>
