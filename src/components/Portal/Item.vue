<template>
  <div class="client-box-out">
    <div class="client-box">
      <div class="cover-box" style="background-image: url('https://portal.arbitrum.one/wp-content/uploads/2021/09/1080x360.jpg')">
        <span class="islive-notif"><img src="https://portal.arbitrum.one/wp-content/themes/arbitrumportal/images/live1.svg" class="uk-display-inline-block" /></span>
      </div>
      <div class="text-box">
        <div class="client-pic circle">
          <a href="https://app.1inch.io/#/42161/" target="_blank">
            <img src="https://portal.arbitrum.one/wp-content/uploads/2021/09/LwPtET72_400x400.jpg" class="uk-display-inline-block" alt="" />
          </a>
        </div>
        <div class="text-box-in">
          <h4 class="saira-semibold uk-text-center client-name">1inch</h4>
          <p class="saira-reg uk-text-center client-type">dApps</p>
          <div class="socials">
            <a class="uk-display-inline-block discord f-color-313852" href="https://discord.com/invite/1inch" target="_blank"><i class="fab fa-discord" aria-hidden="true"></i></a>
            <a class="uk-display-inline-block twitter f-color-313852" href="https://twitter.com/1inch" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            <a class="uk-display-inline-block github f-color-313852" href="https://github.com/1inch" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PortalItem"
});
</script>
