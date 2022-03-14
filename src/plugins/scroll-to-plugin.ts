import Vue from "vue";
import VueScrollTo from "vue-scrollto";

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
