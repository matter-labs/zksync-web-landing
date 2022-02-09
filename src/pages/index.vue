<template>
  <div class="indexPage">
    <z-hero />
    <block-reviews-slider class="_padding-y-2 _padding-top-md-4 _padding-bottom-md-4" />
    <block-about />
    <comparison />

    <i-container class="codeContainer _padding-y-2 _padding-top-md-4 _padding-bottom-md-4 _margin-y-3 _margin-bottom-8">
      <div class="h2" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800" data-aos-offset="0">By developers, for developers</div>
      <div class="grayText subheaderText _margin-bottom-3" data-aos="fade-up" data-aos-delay="50" data-aos-offset="0" data-aos-duration="1200">
        Ease and fun of development are at the<br />
        core of
        <emphasis />
        design
      </div>

      <div class="codeGrid _margin-top-3">
        <div class="columnGrid" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200">
          <div class="textItem" :class="{ chosen: chosenBlock === 0 }" @click="chosenBlock = 0">
            <div class="h2">Powerful, easy-to-use API</div>
            <div class="grayText">Integrate payments and atomic swaps in a few lines of code.</div>
          </div>
          <div class="textItem">
            <div class="h2">Smart contracts in Zinc</div>
            <div class="grayText">Develop type-safe, functional style smart contracts on Zinc: a Rust-based framework.</div>
            <z-button css-class="width-300" href="https://docs.zksync.io/zkevm" outline="outline" size="md" target="_blank"
              >Learn more about <span class="gradient-zk-evm">zkEVM</span>
            </z-button>
          </div>
          <div class="textItem">
            <div class="h2 _position-relative">
              Smart contracts in Solidity
              <i-badge variant="secondary _upcoming-h3">upcoming</i-badge>
            </div>
            <div class="grayText">Deploy your existing EVM codebase with minimum modifications.</div>
          </div>
        </div>
        <transition-group tag="div" class="codeBlockSpace" name="slideRight">
          <block-code-block key="code" />
        </transition-group>
      </div>
    </i-container>

    <div class="decentralizedContainer _padding-y-2 _padding-top-md-4 _padding-bottom-md-4">
      <i-container>
        <img
          alt="Decentralized, on principle"
          class="mainImg _margin-bottom-4"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          src="@/assets/images/pages/index/decentralized.jpg"
        />
        <div class="decentralizedGrid">
          <div data-aos="fade-right" data-aos-delay="50" data-aos-offset="-100" data-aos-duration="1200">
            <div class="h2 _margin-bottom-2">
              Decentralized,<br />
              on principle
            </div>
            <div class="grayText">
              <p>
                <emphasis />
                is a mission-driven project. Its purpose is to break financial barriers and enhance world’s freedom — by accelerating the mass adoption of public blockchains. We
                take this mission to heart: check out our public
                <z-cta href="https://www.notion.so/matterlabs/Matter-Labs-Team-Handbook-43342b471fe14f05b2baf250cb7c7a02">Team Handbook</z-cta>
              </p>
              <p>
                While healthy pragmatism is necessary to move fast,
                <emphasis />
                will never betray the ethos of crypto. Over the past two years, we’ve
                <z-cta href="https://medium.com/matter-labs/tagged/l2" target="_blank">fought relentlessly</z-cta>
                to make sure that the widely adopted L2 is as secure, open, and reliable as Ethereum itself. We won’t rest until the original
                <z-cta href="https://medium.com/matter-labs/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58" target="_blank">zkSync vision</z-cta>
                is fully materialized.
              </p>
            </div>
            <z-button class="_margin-x-xs-auto _margin-top-2" href="https://www.notion.so/matterlabs/Freedom-d36a797ff1aa47d2859f9e0c5ffbd0ab" size="lg" variant="secondary"
              >More about our philosophy
            </z-button>
          </div>
          <div class="textGrid">
            <div class="ourValues _text-bold">Our values</div>
            <div class="textItem">
              <div class="h2">Fairness</div>
              <div class="grayText">
                The rules of the game must be equal for all, with no preferences to the wealthy or powerful.
                <emphasis />
                reinforces this by making Ethereum affordable.
              </div>
            </div>
            <div class="textItem">
              <div class="h2">Inclusion</div>
              <div class="grayText">
                Free access to finance is a fundamental right.
                <emphasis />
                is unconditionally permissionless from day one, and will also bring strong censorship-resistance to L2.
              </div>
            </div>
            <div class="textItem">
              <div class="h2">Resilience</div>
              <div class="grayText">
                We believe that only the paranoid survive. To resist even the most powerful potential adversaries,
                <emphasis />
                is going down the path of
                <z-cta :href="'//docs.zksync.io/userdocs/decentralization.html'" target="_blank">progressive decentralization</z-cta>
              </div>
            </div>
          </div>
        </div>
      </i-container>
    </div>

    <partners :partners-data="visionaries" :title="'Backed by visionaries'" />
    <partners :partners-data="founders" :title="'the founders and leadership of'" :custom-css-class="'partnersBlured'" />
    <partners :partners-data="angels" :title="'and angels'" :grayscale="true" :custom-css-class="'noImages'" :make-fluid="true" :partners-per-page="0" />

    <i-container class="_margin-y-lg-2 _margin-y-xs-2 communityOwned">
      <div class="topBlock _padding-bottom-2">
        <div class="h2 _padding-top-1">Owned by the community</div>
        <div class="grayText _margin-top-2 _margin-bottom-0">
          <p class="_margin-bottom-0">
            <emphasis />
            is 100%
            <z-cta href="https://github.com/matter-labs/zksync"><i class="fab fa-github" /> open source</z-cta>
          </p>
        </div>
      </div>
      <div class="bottomBlock">
        <div class="h2 _padding-top-1">Get involved</div>
        <div class="grayText _zk-font-18">Take part in the community discussions and don’t miss important updates</div>
        <block-social-block class="_margin-y-lg-2 _margin-y-xs-1" location="footer" />
        <block-newsletter />
        <a id="community" />
      </div>
    </i-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "index",
  data() {
    return {
      angels: [
        {
          id: "Polynya",
          alt: "Polynya",
          title: "Polynya",
        },
        {
          id: "CryptoCobain",
          alt: "CryptoCobain",
          title: "CryptoCobain",
        },
        {
          id: "DCinvestor",
          alt: "DCinvestor",
          title: "DCinvestor",
        },
        {
          id: "Anthony Sassano",
          alt: "Anthony Sassano",
          title: "Anthony Sassano",
        },
        {
          id: "Ryan S Adams",
          alt: "Ryan S Adams",
          title: "Ryan S Adams",
        },
        {
          id: "David Hoffman",
          alt: "David Hoffman",
          title: "David Hoffman",
        },
        {
          id: "Justin Drake",
          alt: "Justin Drake",
          title: "Justin Drake",
        },
        {
          id: "Jonathan Caras",
          alt: "Jonathan Caras",
          title: "Jonathan Caras",
        },
        {
          id: "Ashwin Ramachandran",
          alt: "Ashwin Ramachandran",
          title: "Ashwin Ramachandran",
        },
        {
          id: "Daniel Jamal Finlay",
          alt: "Daniel Jamal Finlay",
          title: "Daniel Jamal Finlay",
        },
        {
          id: "Dany Farha",
          alt: "Dany Farha",
          title: "Dany Farha",
        },
        {
          id: "Sebastian Buergel",
          alt: "Sebastian Buergel",
          title: "Sebastian Buergel",
        },
        {
          id: "Sharanjai Prasad",
          alt: "Sharanjai Prasad",
          title: "Sharanjai Prasad",
        },
        {
          id: "David Ian Mihal",
          alt: "David Ian Mihal",
          title: "David Ian Mihal",
        },
        {
          id: "Alessandro Raboni",
          alt: "Alessandro Raboni",
          title: "Alessandro Raboni",
        },
        {
          id: "Takeshi Kazumoto",
          alt: "Takeshi Kazumoto",
          title: "Takeshi Kazumoto",
        },
        {
          id: "Fiskantes,",
          alt: "Fiskantes,",
          title: "Fiskantes,",
        },
        {
          id: "Gregory McCubbin",
          alt: "Gregory McCubbin",
          title: "Gregory McCubbin",
        },
        {
          id: "Saurabh Sharma",
          alt: "Saurabh Sharma",
          title: "Saurabh Sharma",
        },
        {
          id: "Ben Simon",
          alt: "Ben Simon",
          title: "Ben Simon",
        },
        {
          id: "Marc Weinstein",
          alt: "Marc Weinstein",
          title: "Marc Weinstein",
        },
        {
          id: "Marat Kichikov",
          alt: "Marat Kichikov",
          title: "Marat Kichikov",
        },
        {
          id: "egirl Capital",
          alt: "egirl Capital",
          title: "egirl Capital",
        },
        {
          id: "4RC Partners",
          alt: "4RC Partners",
          title: "4RC Partners",
        },
      ],
      visionaries: [
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
          id: {
            id: "partner-1kx",
            link: "",
            img: "1kx.svg",
            alt: "1kx Token Venture Capital",
            title: "Funding from the 1kx for Matter Labs",
          },
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
      ],
      founders: [
        {
          id: "Numio",
          link: "https://twitter.com/GetNumio/status/1346421335438872576",
          img: "numio.png",
          alt: "Numio",
          title: "Numio is using zkRollups from zkSync in the mobile payments app",
        },
        {
          id: "Gitcoin",
          link: "https://gitcoin.co/blog/gitcoin-grants-round-7/",
          img: "gitcoin.svg",
          alt: "Gitcoin",
          title: "Gitcoin Grants R7 Improvements: Scalability & Identity thanks to Layer 2 Integration w/ zkSync",
        },
        {
          id: "coingecko",
          img: "coingecko.svg",
          alt: "CoinGecko Ventures",
          title: "CoinGecko Ventures",
        },
        {
          id: "flexa",
          img: "flexa.svg",
          alt: "Flexa payments",
          title: "Flexa payments",
        },
        {
          id: "Storj",
          link: "https://twitter.com/kleffew94/status/1360260821524369410",
          img: "storj.svg",
          alt: "Decentralized Cloud Storage",
          title: "Coop w/t zkSync will decrease transaction fees, increase privacy, and enable STORJ nodes to interact directly with the world of DeFi",
        },
        {
          id: "stablepay",
          link: "https://stablepayio.medium.com/update-stablepay-integrates-the-zksync-l2-protocol-2cc3a9b458be",
          img: "stablepay.svg",
          alt: "StablePay decentralized payment platform",
          title: "Update: StablePay integrates the zkSync L2 protocol",
        },
        {
          id: "mykey",
          img: "mykey.svg",
          alt: "MYKEY Wallet",
          title: "MYKEY Wallet",
        },
        {
          id: "argent",
          img: "argent.svg",
          alt: "Argent Wallet",
          title: "Argent Wallet",
        },
        {
          id: "imtoken",
          img: "imtoken.svg",
          alt: "imToken Ventures",
          title: "imToken Ventures",
        },
        {
          id: "figment",
          img: "figment.png",
          alt: "Figment",
          title: "Figment",
        },
        {
          id: "frm",
          img: "frm.svg",
          alt: "frm",
          title: "frm",
        },
        {
          id: "gsr",
          img: "gsr.png",
          alt: "gsr",
          title: "gsr",
        },
        {
          id: "opium-network",
          img: "opium-network.png",
          alt: "opium-network",
          title: "Opium Network.png",
        },
        {
          id: "euler",
          img: "euler.png",
          alt: "euler",
          title: "euler",
        },
        {
          id: "ethhub",
          img: "ethhub.svg",
          alt: "ethhub",
          title: "ethhub",
        },
        {
          id: "nansen",
          img: "nansen.png",
          alt: "nansen",
          title: "nansen",
        },
        {
          id: "zerion",
          img: "zerion.svg",
          alt: "zerion",
          title: "zerion",
        },
        {
          id: "unknown",
          img: "unknown.svg",
          alt: "unknown",
          title: "unknown",
        },
        {
          id: "Paraswap",
          link: "https://paraswap.io/",
          img: "paraswap.svg",
          alt: "Paraswap",
          title: "Paraswap",
        },
        {
          id: "lido",
          img: "lido.svg",
          alt: "lido",
          title: "lido",
        },
        {
          id: "liquidity-network",
          img: "liquidity-network.svg",
          alt: "liquidity-network",
          title: "liquidity-network",
        },
        {
          id: "celer",
          img: "celer.png",
          alt: "celer",
          title: "celer",
        },
        {
          id: "unknown2",
          img: "unknown2.svg",
          alt: "unknown2.svg",
          title: "unknown2.svg",
        },
        {
          id: "chainlink.svg",
          img: "chainlink.svg",
          alt: "chainlink.svg",
          title: "chainlink.svg",
        },
        {
          id: "wintermute.svg",
          img: "wintermute.svg",
          alt: "wintermute.svg",
          title: "wintermute.svg",
        },
        {
          id: "connext.svg",
          img: "connext.svg",
          alt: "connext.svg",
          title: "connext.svg",
        },
        {
          id: "unknown3",
          img: "unknown3.svg",
          alt: "unknown3.svg",
          title: "unknown3.svg",
        },
        {
          id: "futureswap.svg",
          img: "futureswap.svg",
          alt: "futureswap.svg",
          title: "futureswap.svg",
        },
        {
          id: "makerdao.svg",
          img: "makerdao.svg",
          alt: "makerdao.svg",
          title: "makerdao.svg",
        },
        {
          id: "unknownR",
          img: "unknown-r.png",
          alt: "unknown-r.png",
          title: "unknown-r.png",
        },
        {
          id: "gnosis.svg",
          img: "gnosis.svg",
          alt: "gnosis.svg",
          title: "gnosis.svg",
        },
        {
          id: "chainflow.svg",
          img: "chainflow.svg",
          alt: "chainflow.svg",
          title: "chainflow.svg",
        },
        {
          id: "aave",
          img: "aave.svg",
          alt: "Aave SAGL",
          title: "Aave SAGL",
        },
      ],
      dataForDevelopers: [
        {
          id: null,
          ref: 1,
          link: null,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          title: "Powerful, easy-to-use API",
          text: "Integrate payments and atomic swaps in a few lines of code.",
        },
        {
          id: null,
          ref: 2,
          link: null,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          title: "Smart contracts in Zinc",
          text: "Develop type-safe, functional style smart contracts on Zinc: a Rust-based framework.",
        },
        {
          id: null,
          ref: 3,
          link: "https://zksync.curve.fi",
          isButton: true,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          isUpcoming: true,
          title: "Powerful, easy-to-use API",
          text: "Smart contracts in Solidity ",
        },
      ],
      lockVisible: false,
      contactInfoShown: false,
      chosenBlock: 0,
    };
  },
});
</script>

<style lang="scss">
.indexPage .codeContainer .codeGrid .textItem .button {
  //noinspection CssInvalidPropertyValue
  .gradient-zk-evm {
    display: inline;
    letter-spacing: 0.0075rem;
    color: transparent !important;
    background-image: linear-gradient(272.04deg, #cbcbff 46.24%, #8c8dfc 99.45%) !important;
    box-sizing: border-box !important;
    font-weight: 700;
    transition: all 210ms ease;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &:hover .gradient-zk-evm {
    color: #ffffff !important;
    background: transparent !important;
    -webkit-background-clip: unset !important;
    -webkit-text-fill-color: unset !important;
  }
}
</style>
