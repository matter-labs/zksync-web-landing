<template>
  <section class="zk-top-bar-component" @click="topBarClicked">
    <div class="zk-top-animation-wrapper">
      <div v-for="index in news" :key="index" class="single-news">
        <svg width="43" height="25" class="brand-logo-symbol" viewBox="0 0 43 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.6539 12.4915L30.8378 0.716743V9.34L19.1055 17.9739L30.8378 17.982V24.2662L42.6539 12.4915Z" fill="#fff" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.998047 12.4872L12.8141 24.2619V15.708L24.5465 7.0047L12.8141 6.99664V0.712463L0.998047 12.4872Z" fill="#fff" />
        </svg>
        <span>zkSync v2 NOW ON TESTNET</span>
        <z-cta href="https://v2.zksync.io" target="_blank">LEARN MORE</z-cta>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BlockTopBar",
  data() {
    return {
      multiplyBy: 10 as number,
    };
  },
  head() {
    return {
      bodyAttrs: {
        style: "padding-top: 40px !important",
      },
    };
  },
  computed: {
    news(): number[] {
      const news = [];
      let x = 0;
      while (x <= this.multiplyBy) {
        news.push(x);
        x++;
      }
      return news;
    },
  },
  mounted() {
    if (window.innerWidth) {
      this.multiplyBy = Math.round((window.innerWidth * 2) / 305);
    }
  },
  methods: {
    topBarClicked(): void {
      window.open("https://v2.zksync.io", "_blank");
    },
  },
});
</script>
<style lang="scss" scoped>
.zk-top-bar-component {
  z-index: 1000;
  overflow: hidden;
  background: $violet;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: fixed;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;

  .zk-top-animation-wrapper {
    width: fit-content;
    position: absolute;
    overflow: hidden;
    height: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    animation: marquee 60s linear infinite;

    &:hover {
      cursor: pointer;
    }

    .single-news {
      margin-left: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      white-space: nowrap;
      font-family: $openSans;
      font-size: 12px;
      line-height: 16px;

      @media screen and (max-width: $mobile) {
        margin-left: 40px;
      }
      @media screen and (min-width: $mobile) and (max-width: $tablet) {
        margin-left: 80px;
      }

      & > * {
        margin-left: 0.25rem;

        &:first-child {
          margin-left: 0;
        }
      }

      .brand-logo-symbol {
        max-height: 16px;
      }

      .zk-cta {
        font-weight: 700;

        .HoverArrow {
          margin-top: -2px !important;
        }
      }
    }
  }
}

@keyframes marquee {
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
}
</style>
