<template>
  <div class="partnersBlock _padding-y-2 _margin-bottom-0 _margin-top-2" :class="extraCssClass">
    <i-container :class="{ '-fluid': makeFluid }">
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">{{ title }}</div>
      <div class="sponsorsContainer _margin-y-2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <a
          v-for="(singlePartner, itemIndex) in partnersData"
          :id="singlePartner.id"
          :key="singlePartner.id"
          :href="!singlePartner.link ? `https://medium.com/matter-labs/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824` : singlePartner.link"
          class="antilink"
          :class="{ 'show-on-mobile': partnersPerPage === 0 ? true : itemIndex < pagesShown * partnersPerPage }"
          target="_blank"
        >
          <img v-if="singlePartner.img !== undefined" :src="getAssetUrl(singlePartner.img)" :alt="singlePartner.alt" :title="singlePartner.title" />
          <template v-else>
            {{ singlePartner.title }}
          </template>
        </a>
      </div>
      <div v-if="morePagesAvailable" class="_padding-bottom-2">
        <z-button outline="outline" size="md" class="_margin-x-auto _margin-top-4 _display-block _hidden-md-and-up no-hover-effect" @click.native="showMorePages"
          >Load more</z-button
        >
      </div>
    </i-container>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { PartnerDataItem } from "@/types";

export default Vue.extend({
  name: "Partners",
  props: {
    partnersData: {
      type: Array,
      default: [] as PartnerDataItem[],
      required: false,
    } as PropType<PartnerDataItem[]>,
    partnersPerPage: {
      type: Number,
      default: 6,
      required: false,
    } as PropType<number>,
    title: { type: String, default: "", required: true } as PropType<string>,
    customCssClass: { type: String, default: "", required: false } as PropType<string>,
    linkClass: { type: String, default: "", required: false } as PropType<string>,
    makeFluid: { type: Boolean, default: false, required: false } as PropType<boolean>,
  },
  data() {
    return {
      pagesShown: 1,
    };
  },
  computed: {
    morePagesAvailable(): boolean {
      if (this.partnersPerPage === 0) {
        return false;
      }
      return this.pagesShown * this.partnersPerPage < this.partnersData.length;
    },
    extraCssClass(): string[] {
      if (this.customCssClass) {
        return [this.customCssClass];
      }
      return [];
    },
  },
  methods: {
    getAssetUrl(img: string) {
      return require("@/assets/images/investors/" + img);
    },
    showMorePages() {
      if (this.morePagesAvailable) {
        this.pagesShown += 1;
      }
    },
  },
});
</script>
<style lang="scss">
.partnersBlock .sponsorsContainer {
  a#frm,
  a#unknown3,
  a#unknown,
  a#unknown2 {
    max-width: 90px;
  }

  a#unknownR {
    max-width: 70px;
  }
}
</style>
