<template>
  <div>
    <header>
      <div class="title">
        <span>
          <strong>AcaDev Blog</strong>
        </span>
        <span>by Gustavo Passos</span>
      </div>
      <MenuIcon></MenuIcon>
    </header>
    <menu-options></menu-options>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuIcon from "./MenuIcon.vue";
import MenuOptions from "./MenuOptions.vue";

export default Vue.extend({
  name: "Header",
  components: {
    MenuIcon,
    MenuOptions
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
}

.title {
  float: left;

  span {
    display: block;
  }

  :first-child strong {
    letter-spacing: 2px;
    font-size: 1.5em;
  }

  :nth-child(2) {
    font-size: 0.9em;
  }
}
</style>
