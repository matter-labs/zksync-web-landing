import Vue from "vue";

import { defineNuxtPlugin } from "@nuxtjs/composition-api";

export default defineNuxtPlugin(() => {
  Vue.mixin({
    methods: {
      scrollTo (selector) {
        const domElement = document.querySelector(selector);
        if (domElement.length) {
          this.$nextTick(() => {
            domElement.scrollIntoView();
          });
        }
      },
    },
  });
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.screen.availHeight}px`);
  };
  appHeight();
});
