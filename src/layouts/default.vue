<template>
  <div class="indexLayout">
    <block-header />
    <div class="routerContainer">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <block-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// @ts-ignore: Unreachable code error
import AOS from "aos";

export default Vue.extend({
  data() {
    return {};
  },
  created() {
    AOS.init({
      once: true
    });
    (this as any).$inkline.config.variant = "dark"; /* Vue 2 TS doesn't support custom global properties, therefore we need to bypass type checking */
  },
  mounted() {
    if (process.client) {
      window.history.scrollRestoration = "manual";
    }
    this.handlePageScroll();
  },
  methods: {
    handlePageScroll() {
      const lastScroll = this.$store.getters["scroll/getLastScroll"];
      document.documentElement.scrollTop = lastScroll !== false ? lastScroll.y : 0;
    }
  }
});
</script>