<template>
  <h1>comments foda</h1>
</template>

<script lang="ts">
import Vue from "vue";
import { getComments } from "@/services/commentsService";

export default Vue.extend({
  name: "Comments",
  props: ["issueId"],
  async created() {
    const result = await getComments(this.issueId);
  }
});
</script>

<style lang="scss" scoped></style>