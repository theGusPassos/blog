<template>
  <header>
    <div class="title">
      <span>AcaDev Blog</span><span>by Gustavo Passos</span>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

header {
  background: $main-color;
  color: $main-text-color;
  padding: 4% 8%;
}

.title {
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
