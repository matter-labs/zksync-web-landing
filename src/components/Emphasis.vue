<template>
  <i-badge class="emphasis" variant="light">
    <img
      v-if="showLogo"
      class="logoImg"
      src="@/assets/images/pages/index/symbol-logo.svg"
      alt="zkSync is Ethereum’s most user-centric ZK rollup"
      title="zkSync solves Ethereum scalability with zero security compromises"
    >
    {{ brandName }}
  </i-badge>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Emphasis",
  props: {
    showLogo: {
      default: false,
      type: Boolean,
      required: false
    },
    brandName: {
      default: "zkSync",
      type: String,
      required: false
    }
  }
});
</script>
<style lang="scss">
.emphasis {
  display: inline-flex !important;
  align-items: baseline;
  flex-flow: row nowrap;

  img {
    margin-right: 0.25rem;
  }
}
</style>
