<template>
  <div class="partnersBlock _padding-y-2 _margin-bottom-0 _margin-top-2">
    <i-container>
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200" v-html="title" />
      <div class="sponsorsContainer _margin-y-2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <a
          v-for="(singlePartner, itemIndex) in partnersData"
          :id="singlePartner.id"
          :key="singlePartner.id"
          :href="!singlePartner.link ? `https://medium.com/matter-labs/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824` : singlePartner.link"
          class="antilink"
          :class="{ 'show-on-mobile': itemIndex < pagesShown * partnersPerPage }"
          target="_blank"
        >
          <img :src="getAssetUrl(singlePartner.img)" :alt="singlePartner.alt" :title="singlePartner.title" />
        </a>
      </div>
      <div v-if="morePagesAvailable" class="_padding-bottom-2">
        <z-button class="_margin-x-auto _display-block _hidden-md-and-up no-hover-effect" variant="glow" size="lg" @click.native="showMorePages()">Show more</z-button>
      </div>
    </i-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { PartnerDataItem } from "@/types";

export default Vue.extend({
  name: "Partners",
  props: {
    partnersData: {
      type: Array,
      default: () => {
        return [
          {
            id: "ethereumFoundation",
            link: "https://medium.com/matter-labs/grant-from-the-ethereum-foundation-for-matter-labs-64338f3dd938",
            img: "ethereumFoundation.svg",
            alt: "Ethereum Foundation",
            title: "Grant from the Ethereum Foundation for Matter Labs",
          },
          {
            id: "a16z",
            link: "https://a16z.com/2021/11/08/investing-in-matter-labs/",
            img: "a16z.png",
            alt: "Andreessen Horowitz",
            title: "a16z (Andreessen Horowitz) investing in Matter Labs",
          },
          {
            id: "placeholder",
            link: "https://matterlabs.medium.com/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824",
            img: "placeholder.svg",
            alt: "Placeholder Venture Capital",
            title: "Investment from the Placeholder for the Matter Labs",
          },
          {
            id: "partner-1kx",
            link: "https://t.co/j9z0U8fHDL?amp=1",
            img: "1kx.svg",
            alt: "1kx Token Venture Capital",
            title: "Funding from the 1kx for Matter Labs",
          },
          {
            id: "dragonfly",
            link: "https://matterlabs.medium.com/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824",
            img: "dragonfly.svg",
            alt: "Dragonfly Capital",
            title: "Investment from the Dragonfly Capital for Matter Labs",
          },
          {
            id: "blockchain",
            link: "https://blog.matter-labs.io/funding-ea89c1fa731e",
            img: "blockchain-com.png",
            alt: "Blockchain.com",
            title: "zkSync's new investors include Blockchain.com",
          },
          {
            id: "blockchain-capital",
            link: "https://blog.matter-labs.io/funding-ea89c1fa731e",
            img: "blockchaincapital.png",
            alt: "Blockchain.com",
            title: "zkSync's new investors include Blockchain.com",
          },
          {
            id: "crypto-com",
            link: "https://blog.matter-labs.io/funding-ea89c1fa731e",
            img: "crypto-com.png",
            alt: "Crypto.com",
            title: "zkSync's new investors include Crypto.com",
          },
          {
            id: "dekryptcapital",
            link: "https://www.coindesk.com/startup-bringing-zero-knowledge-proofs-to-ethereum-raises-2-million",
            img: "dekryptcapital.svg",
            alt: "Dekrypt Capital Venture Capital",
            title: "Grant from the Dekrypt Capital for Matter Labs",
          },
          {
            id: "hashed",
            link: "https://medium.com/hashed-official/our-investment-in-matter-labs-building-highways-for-defi-2062e4e76041",
            img: "hashed.svg",
            alt: "Hashed blockchain experts and builders",
            title: "Grant from the Hashed for Matter Labs",
          },
          {
            id: "usv",
            link: "https://matterlabs.medium.com/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824",
            img: "usv.svg",
            alt: "Union Square Ventures",
            title: "Funding from the Union Square Ventures for Matter Labs",
          },
          {
            id: "okex-blockchain-ventures",
            link: "https://matterlabs.medium.com/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824",
            img: "okex-blockchain-ventures.png",
            alt: "OKEx Blockchain Ventures",
            title: "Funding from the OKEx Blockchain Ventures for Matter Labs",
          },
          {
            id: "coinbase",
            img: "coinbase.svg",
            alt: "Coinbase Ventures",
            title: "Coinbase Ventures",
          },
          {
            id: "binance",
            img: "binance.svg",
            alt: "Binance",
            title: "Binance",
          },
          {
            id: "ripio",
            img: "ripio.svg",
            alt: "Ripio",
            title: "Ripio",
          },
          {
            id: "huobi",
            img: "huobi.svg",
            alt: "Huobi Global",
            title: "Huobi Global",
          },
          {
            id: "moonpay",
            img: "moonpay.svg",
            alt: "Moon Pay",
            title: "Moon Pay",
          },
          {
            id: "consensys",
            img: "consensys.png",
            alt: "Consensys",
            title: "consensys",
          },

          {
            id: "bybit",
            img: "bybit.png",
            alt: "Bybit",
            title: "Bybit",
          },
          {
            id: "alchemy",
            img: "alchemy.png",
            alt: "alchemy",
            title: "alchemy",
          },
          {
            id: "moralis",
            img: "moralis.png",
            alt: "moralis",
            title: "moralis",
          },
          {
            id: "Paraswap",
            link: "https://paraswap.io/",
            img: "paraswap.svg",
            alt: "Paraswap",
            title: "Paraswap",
          },
        ] as Array<PartnerDataItem>;
      },
      required: false,
    },
    partnersPerPage: {
      type: Number,
      default: 4,
      required: false,
    },
    title: { type: String, default: "", required: true },
  },
  data() {
    return {
      pagesShown: 1,
    };
  },
  computed: {
    morePagesAvailable(): boolean {
      return this.pagesShown * this.partnersPerPage < this.partnersData.length;
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
#partners .sponsorsContainer a#frm,
#partners .sponsorsContainer a#unknown,
#partners .sponsorsContainer a#unknown2 {
  max-width: 90px;
}
#partners .sponsorsContainer a#unknown3 {
  max-width: 90px;
}
#partners .sponsorsContainer a#unknownR {
  max-width: 70px;
}
</style>
