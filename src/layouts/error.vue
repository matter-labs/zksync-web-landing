<template>
  <div class="error-layout">
    <h1 class="error-status-code">{{ error.statusCode }}</h1>
    <p class="error-description">{{ error.statusCode === 404 ? "Sorry, we were unable to find that page" : error.message }}</p>
    <div class="error-links-container">
      <z-cta href="/" target="_self" class="linkItem">Home</z-cta>
      <z-cta href="https://docs.zksync.io/" class="linkItem">Docs</z-cta>
      <z-cta href="https://wallet.zksync.io/" class="linkItem">zkWallet</z-cta>
      <z-cta href="https://zkscan.io/" class="linkItem">zkScan</z-cta>
    </div>
    <p class="error-underline">Let's continue with links above</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ZCta from "@/components/ZCta.vue";

export default Vue.extend({
  components: { ZCta },
  props: {
    error: {
      required: false,
      type: Object,
      default: () => ({}),
    },
  },
  head: {
    bodyAttrs: {
      class: "error-layout-body inkline -dark",
    },
  },
});
</script>
