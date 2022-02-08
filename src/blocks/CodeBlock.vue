<template>
  <div class="codeBlockContainer" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200">
    <div class="codeBlockTop">
      <div class="codeBlockHeader">
        <div class="codeBlockCircles">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
      </div>
      <transition name="fade">
        <div class="overlay">
          <img alt="By developers, for developers" src="@/assets/images/pages/index/code.jpg" />
        </div>
      </transition>
    </div>
    <div class="codeBlockFooter">
      <div class="buttonBlock">
        <i-button class="_padding-x-2 antilink" size="lg" variant="secondary" :href="'//docs.zksync.io/dev'" target="_blank"> Get started! </i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CodeBlock",
});
</script>
