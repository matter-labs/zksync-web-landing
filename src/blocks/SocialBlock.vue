<template>
  <div class="socialIcons">
    <a
      v-for="(socialProfile, numIndex) in socialNetworks"
      :key="numIndex"
      :href="socialProfile.url"
      class="socialItem"
      target="_blank"
      :class="`icon-${socialProfile.icon}`"
    >
      <v-icon :name="socialProfile.icon" scale="22px"/>
      <span>{{ socialProfile.name }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface socialIcon {
  name: string;
  icon: string;
  url: string;
  hideIn?: string;
}

export default Vue.extend({
  props: {
    location: {
      required: false,
      type: String,
      default: "header",
    },
  },
  computed: {
    socialNetworks(): Array<socialIcon> {
      const socialIcons = [
        {
          name: "Medium Blog",
          icon: "co-medium-m",
          url: "https://medium.com/matter-labs",
        },
        {
          name: "Discord Community",
          icon: "bi-discord",
          url: "https://discord.com/invite/px2aR7w",
        },
        {
          name: "Telegram Community",
          icon: "co-telegram-plane",
          url: "https://t.me/zksync",
        },
        {
          name: "Twitter Community",
          icon: "bi-twitter",
          url: "https://twitter.com/zksync",
        },
        {
          name: "All Contacts",
          icon: "bi-at",
          url: "/contact.html",
          hideIn: "footer",
        },
      ] as Array<socialIcon>;
      return socialIcons.filter((item) => !item.hideIn || item.hideIn !== this.location);
    },
  },
});
</script>
