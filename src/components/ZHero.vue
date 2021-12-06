<template>
  <i-container class="indexFullScreen zHero">
    <h1 class="mainHeadline" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      Explore<br>
      <span class="headerGradientTxt _text-gradient-zk">zkPortal</span>
    </h1>
    <p class="grayText aboutZkSync subheaderText" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      Your gateway into the most engaging<br> EVM-compatible
      <emphasis brand-name="" :show-logo="true" /> Rollup ecosystem
    </p>
    <i-row center data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" data-aos-once="true">
      <z-cta :href="'/faq/'" class="exploreFAQ _margin-top-xs-1 _margin-bottom-xs-2 _margin-y-lg-3">
        FAQ and docs
      </z-cta>
    </i-row>
    <a
      class="scrollDown _hidden-lg-and-up"
      data-aos-offset="-100"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
      @click.capture="scrollTo('#zksync-native-tools')"
    >
      <v-icon name="pr-arrow-down" />
    </a>
    <a
      class="scrollDown _hidden-md-and-down"
      data-aos-offset="-100"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
      @click.capture="scrollTo('#zksync-native-tools')"
    >
      <v-icon name="pr-arrow-down" />
    </a>
  </i-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ZHero",
});
</script>

<style lang="scss">
.zHero {
  .headerGradientTxt {
    font-family: "FK Grotesk", "sans-serif" !important;
    text-align: center;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-tap-highlight-color: transparent;
    font-size: 6rem;


    @media screen and (max-width: $mobile){
      font-size: 3.375rem;
    }
  }
}
</style>
