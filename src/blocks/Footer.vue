<template>
  <footer class="mainFooter">
    <i-container>
      <i-row class="_padding-y-lg-2 _padding-y-xs-1">
        <i-column :xs="12" :md="6" class="_padding-left-0">
          <div class="secondaryText">Made with ❤ by
            <a href="https://matter-labs.io" target="_blank">Matter Labs</a>
          </div>
        </i-column>
        <i-column :xs="12" :md="6" class="_padding-right-0">
          <div class="rightSideLinks">
            <template v-for="singleLink in menuItems">
              <a :href="'/contact.html'" :class="[singleLink.cssClass]">
                <v-icon :name="singleLink.icon" :scale="singleLink.iconScale" v-if="singleLink.icon" />
                {{ singleLink.title }}
              </a>
            </template>
            <a :href="'https://github.com/matter-labs/zksync'" class="icon-github">
              <v-icon name="bi-github" :scale="1" />&nbsp;GitHub
            </a>
            <a :href="'/legal/terms.html'">Terms</a>
            <a :href="'/legal/privacy.html'">Privacy Policy</a>
          </div>
        </i-column>
      </i-row>
    </i-container>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

declare interface menuLink {
  link: string;
  title: string;
  cssClass?: string | undefined;
  icon?: string;
  iconScale?: string | null;
}

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      menuItems: <menuLink[]>[
        {
          link: "://docs.zksync.io/contacts.html",
          title: "&nbsp;Contacts",
          cssClass: { "icon-contact": true },
          icon: "bi-at",
          iconScale: 1.2
        }, {
          link: "://github.com/matter-labs/zksync",
          title: "&nbsp;GitHub",
          cssClass: { "icon-github": true },
          icon: "bi-github"
        }, {
          link: "://docs.zksync.io/legal/terms.html",
          title: "Terms"
        }, {
          link: "://docs.zksync.io/legal/terms.html",
          title: "Privacy Policy"
        }
      ]
    };
  }
});
</script>