<template>
  <section id="portalIntegrations" class="_padding-y-2 _margin-bottom-2 _margin-top-2">
    <i-container>
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
        Explore the
        <emphasis brand-name="Ecosystem" :show-logo="true" />
      </div>
      <div class="subheaderText grayText">
        These integrations are created by growing zkSync-community
      </div>
      <div class="badgeFilterBar">
        <i-badge :variant="filterType === '' ? 'primary' : 'outline'" size="md" @click.native="filterData('')">
          All
        </i-badge>
        <i-badge v-for="singleType in uniqueTypes" :key="singleType" :variant="filterType === singleType ? 'primary' : 'outline'" size="md" @click.native="filterData(singleType)">
          {{ singleType }}
        </i-badge>
      </div>
    </i-container>
    <i-container fluid>
      <div class="itemsIntegrationContainer _margin-y-2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <portal-item-card
          v-for="singlePartner in filteredPartners"
          :id="singlePartner.id"
          :key="singlePartner.id"
          :href="!singlePartner.link ? `https://medium.com/matter-labs/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824` : singlePartner.link"
          target="_blank"
          class="integration"
        >
          <img :src="getAssetUrl(singlePartner.img)" :alt="singlePartner.alt" :title="singlePartner.title">
          <h3>
            {{ singlePartner.title }}
            <i-badge v-show="!filterType" variant="success" size="sm">
              {{ singlePartner.type }}
            </i-badge>
          </h3>
        </portal-item-card>
      </div>
    </i-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import PortalItemCard from "~/components/Portal/ItemBlock.vue";

interface IntegrationDataItem {
  id: string;
  type: string;
  img: string;
  alt: string;
  title: string;
  link?: string;
}

export default Vue.extend({
  name: "PortalTeaser",
  components: { PortalItemCard },
  props: {
    filter: {
      type: String,
      default: null,
      required: false
    },
    singlePage: {
      type: Boolean,
      default: false,
      required: false
    },
    limit: {
      type: Number,
      default: 0,
      required: false
    },
    partnersData: {
      type: Array,
      default: () => {
        return [
          {
            id: "curve",
            img: "curve.svg",
            alt: "Curve + zkSync",
            title: "Curve + zkSync",
            type: "dapp"
          },
          {
            id: "aave",
            img: "aave.svg",
            alt: "Aave SAGL",
            title: "Aave SAGL",
            type: "dapp"
          },
          {
            id: "loopring",
            img: "loopring.svg",
            alt: "LOOPRING WALLET",
            title: "LOOPRING WALLET",
            type: "wallet"
          },
          {
            id: "Balancer",
            img: "balancer.svg",
            alt: "Balancer Exchange",
            title: "Balancer Exchange",
            type: "exchange"
          },
          {
            id: "1inch",
            img: "1inch.svg",
            alt: "1inch Exchange",
            title: "1inch Exchange",
            type: "exchange"
          },
          {
            id: "coinbase",
            img: "coinbase.svg",
            alt: "Coinbase Ventures",
            title: "Coinbase Ventures",
            type: "partner"
          },
          {
            id: "huobi",
            img: "huobi.svg",
            alt: "Huobi Global",
            title: "Huobi Global",
            type: "integration"
          },
          {
            id: "binance",
            img: "binance.svg",
            alt: "Binance",
            title: "Binance",
            type: "exchange"
          },
          {
            id: "moonpay",
            img: "moonpay.svg",
            alt: "Moon Pay",
            title: "Moon Pay",
            type: "integration"
          },
          {
            id: "ripio",
            img: "ripio.svg",
            alt: "Ripio",
            title: "Ripio",
            type: "integration"
          },
          {
            id: "argent",
            img: "argent.svg",
            alt: "Argent Wallet",
            title: "Argent Wallet",
            type: "wallet"
          },
          {
            id: "imtoken",
            img: "imtoken.svg",
            alt: "imToken Ventures",
            title: "imToken Ventures",
            type: "wallet"
          },
          {
            id: "mykey",
            img: "mykey.svg",
            alt: "MYKEY Wallet",
            title: "MYKEY Wallet",
            type: "wallet"
          }
        ] as Array<IntegrationDataItem>;
      },
      required: false
    }
  },
  data() {
    return {
      filterType: ""
    };
  },
  computed: {
    filteredPartners(): IntegrationDataItem[] {
      let partnersData = this.partnersData as IntegrationDataItem[];
      // console.log("unfiltered", partnersData);
      if (this.filterType!=="") {
        partnersData = partnersData.filter((singlePartner) => singlePartner.type===this.filterType);
      }
      if (this.limit > 0) {
        partnersData?.splice(this.limit + 1);
      }
      // console.log("filtered", partnersData);
      return partnersData;
    },
    uniqueTypes(): string[] {
      const types = [] as string[];
      const data = this.partnersData as IntegrationDataItem[];
      data.forEach((singlePartner: IntegrationDataItem): void => {
        if (!types.includes(singlePartner.type)) {
          types.push(singlePartner.type);
        }
      });
      return types;
    }
  },
  methods: {
    getAssetUrl(img: string) {
      return require("@/assets/images/investors/" + img);
    },
    filterData(filterType: any) {
      // console.log(filterType);
      this.filterType = filterType;
    }
  }
});
</script>
<style lang="scss">
.itemsIntegrationContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
