import Vue from "vue";
import { defineNuxtPlugin } from "@nuxtjs/composition-api";
import VueScrollTo from "vue-scrollto";

export default defineNuxtPlugin(() => {
  Vue.use(VueScrollTo);

  Vue.mixin({
    methods: {
      scrollTo(selector) {
        this.$scrollTo(document.querySelector(selector), 1100, {
          x: false,
          y: true,
          cancelable: true,
          offset: -84,
        });
      },
    },
  });
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.screen.availHeight}px`);
  };
  appHeight();
});
