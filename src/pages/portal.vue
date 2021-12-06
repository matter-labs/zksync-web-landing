<template>
  <div class="indexPage">
    <z-hero />
    <block-zk-tools class="_padding-y-2 _padding-top-md-4 _padding-bottom-md-4" />
    <portal-teaser />
    <block-community />
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      dataForDevelopers: [
        {
          id: null,
          ref: 1,
          link: null,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          title: "Powerful, easy-to-use API",
          text: "Integrate payments and atomic swaps in a few lines of code."
        },
        {
          id: null,
          ref: 2,
          link: null,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          title: "Smart contracts in Zinc",
          text: "Develop type-safe, functional style smart contracts on Zinc: a Rust-based framework."
        },
        {
          id: null,
          ref: 3,
          link: "https://zksync.curve.fi",
          isButton: true,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          isUpcoming: true,
          title: "Powerful, easy-to-use API",
          text: "Smart contracts in Solidity "
        }
      ],
      lockVisible: false,
      contactInfoShown: false,
      chosenBlock: 0
    };
  }
});
</script>
<style lang="scss">

</style>
