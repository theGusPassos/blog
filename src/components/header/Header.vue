<template>
  <header>
    <div class="title">
      <span>
        <strong>AcaDev Blog</strong>
      </span>
      <span>by Gustavo Passos</span>
    </div>
    <NavigationMenu></NavigationMenu>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationMenu from "./NavigationMenu.vue";

export default Vue.extend({
  name: "Header",
  components: {
    NavigationMenu
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/devices.scss";

header {
  background: $main-color;
  color: $main-text-color;
}

.title {
  width: 100%;
  text-align: center;
  padding: 10px 0;

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

@media (min-width: $tablet-size) {
  header {
    font-size: 1.3em;
  }
}
</style>
