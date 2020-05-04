<template>
  <header>
    <div class="title">
      <span>AcaDev Blog</span><span>by Gustavo Passos</span>
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
    MenuIcon,
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

header {
  background: $main-color;
  color: $main-text-color;
  padding: 4% 8%;
  display: flex;
}

.title {
  width: 60%;

  span {
    display: block;
  }

  :first-child {
    font-size: 1.5em;
  }

  :nth-child(2) {
    font-size: 0.8em;
  }
}
</style>
