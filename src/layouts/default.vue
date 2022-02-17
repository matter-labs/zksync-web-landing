<template>
  <div class="indexLayout">
    <block-header />
    <div class="routerContainer">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <block-footer />
    <block-top-bar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AOS from "aos";

export default Vue.extend({
  data() {
    return {};
  },
  created() {
    AOS.init({
      once: true,
    });
    this.$inkline.config.variant = "dark"; /* Vue 2 TS doesn't support custom global properties, therefore we need to bypass type checking */
  },
  mounted() {
    window.history.scrollRestoration = "manual";
    this.handlePageScroll();
  },
  methods: {
    handlePageScroll() {
      const lastScroll = this.$store.getters["scroll/getLastScroll"];
      document.documentElement.scrollTop = lastScroll !== false ? lastScroll.y : 0;
    },
  },
});
</script>
