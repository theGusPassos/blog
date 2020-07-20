<template>
  <header>
    <div class="title">
      <img src="/acadevlogo.png" alt="academic developer logo" />
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

  img {
    width: 50%;
  }

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

  .title {
    img {
      width: 300px;
    }
  }
}
</style>
