<template>
  <div class="portalPage">
    <div class="indexFullScreen">
      <portal-teaser :single-page="true" />
    </div>
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