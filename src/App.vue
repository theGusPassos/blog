<template>
  <div id="app">
    <Header></Header>
    <router-view class="router-body"></router-view>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    Header
  }
});
</script>

<style lang="scss">
@import "./styles/devices.scss";
@import "./styles/colors.scss";

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "Montserrat";
  line-height: 1.5;
}

.router-body {
  padding: 5% 8%;
  max-width: 800px;
  margin: auto;
}

a,
a:visited {
  color: $main-color;
  font-weight: bold;
}

@media (min-width: $tablet-size) {
  .router-body {
    padding: 2% 0;
  }
}
</style>
