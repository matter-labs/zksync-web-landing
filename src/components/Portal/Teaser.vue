<template>
  <section id="portalIntegrations" class="_padding-y-2 _margin-bottom-0 _margin-top-2 _hidden-md-and-down">
    <i-container>
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
        A growing
        <emphasis brand-name="" :show-logo="true" />
        movement
      </div>
      <div class="subheaderText grayText">
        Join the for<span>eth</span>inkers in the
        <emphasis brand-name="zkSync" :show-logo="false" />
        ecosystem
      </div>
      <div class="badgeFilterBar">
        <i-badge size="md" :variant="filterType === null ? 'primary' : 'outline'" @click.native="filterData(null)"> All </i-badge>
        <i-badge size="md" :variant="filterType === 'dapp' ? 'primary' : 'outline'" @click.native="filterData('dapp')">dApp</i-badge>
        <i-badge size="md" :variant="filterType === 'wallet' ? 'primary' : 'outline'" @click.native="filterData('wallet')">Wallet</i-badge>
      </div>
    </i-container>
    <i-container fluid>
      <div class="sponsorsContainer _margin-y-2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <a
          v-for="singlePartner in filteredPartners"
          :id="singlePartner.id"
          :key="singlePartner.id"
          :href="!singlePartner.link ? `https://medium.com/matter-labs/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824` : singlePartner.link"
          target="_blank"
          class="integration"
        >
          <img :src="getAssetUrl(singlePartner.img)" :alt="singlePartner.alt" :title="singlePartner.title" />
          <h3>
            {{ singlePartner.title }}
            <i-badge variant="success" size="sm">{{ singlePartner.type }}</i-badge>
          </h3>
        </a>
      </div>
    </i-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

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
  props: {
    filter: {
      type: String,
      default: null,
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
            title: "Ripio"
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
  methods: {
    getAssetUrl(img: string) {
      return require("@/assets/images/investors/" + img);
    },
    filterData(filterType: any) {
      console.log(filterType);
      this.filterType = filterType;
    }
  },
  computed: {
    filteredPartners(): IntegrationDataItem[] {
      let partnersData = this.partnersData as IntegrationDataItem[];
      console.log("unfiltered", partnersData);
      if (this.filterType !== null) {
        partnersData = partnersData.filter((singlePartner) => singlePartner.type === this.filterType);
      }
      if (this.limit > 0) {
        partnersData?.splice(this.limit + 1);
      }
      console.log("filtered", partnersData);
      return partnersData;
    }
  },
  data() {
    return {
      filterType: <null | string>null
    };
  }
});
</script>