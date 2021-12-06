<template>
  <div class="blockZkTools reviewsContainer" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">
    <a id="zksync-native-tools" />
    <zk-atom-section-header>
      <template>
        Made by
        <emphasis :show-logo="true" />
      </template>
    </zk-atom-section-header>

    <transition name="slideFromLeft">
      <div v-if="currentItem > 0" class="arrow left" @click="scrollItemBack()">
        <v-icon name="ri-arrow-left-line" />
      </div>
    </transition>
    <transition name="slideFromRight">
      <div v-if="rightArrowDisplayed" class="arrow right" @click="scrollItemForward()">
        <v-icon name="ri-arrow-right-line" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="rightArrowDisplayed" class="gradient right" />
    </transition>
    <transition name="fade">
      <div v-if="currentItem > 0" class="gradient left" />
    </transition>
    <i-container ref="container" :fluid="true">
      <div class="itemsContainer" :style="{ transform: `translateX(-${leftPosition - scrollOffset}px)` }">
        <a
          v-for="(singleReview, index) in preparedReviews"
          :id="singleReview.id"
          :key="index"
          ref="reviewItem"
          :href="singleReview.link"
          :class="singleReview.classes"
          class="zkToolItem reviewItem"
          target="_blank"
          draggable="false"
        >
          <div class="reviewText">
            <div
              data-v-93352a30=""
              class="badge zk-badge -sm -success"
              style=""
            >{{ singleReview.version }}
            </div>
            <h4 class="zkToolName _text-gradient-zk">{{ singleReview.title }}</h4>
            {{ singleReview.text }}
          </div>
          <span class="arrowLink">
            <v-icon name="ri-arrow-up-line" :scale="25" />
          </span>
        </a>
      </div>
    </i-container>
  </div>
</template>

<script lang="ts">
import Hammer from "hammerjs";
import Vue, { PropOptions } from "vue";

interface Review {
  id?: string;
  classes?: string;
  title?: string;
  link: string;
  text: string;
  order: number;
  mobileOrder: number;
  version: string;
}

export default Vue.extend({
  name: "BlockZkTools",
  props: {
    reviewsData: {
      default: (): Review[] => {
        return [
          {
            title: "zkWallet",
            link: "https://wallet.zksync.io",
            text: "Safe 🔒 L2-wallet that just works: enjoy accessible & intuitive UI, low-fees & NFT-support. Top-up by fiat directly into L2. Safely withdraw to L1 any time.\n" +
              "Pay or get paid & forget about congested network",
            order: 0,
            mobileOrder: 2,
            version: "1.x"
          },
          {
            title: "zkEvm",
            link: "https://uni.zksync.io",
            text: "We ported Uniswap v2 smart contracts and frontend on the first ever fully functional zk-EVM testnet. It uses native Solidity compiled contract, " +
              "made with original frontend using standard web3 API and is signed natively",
            order: 2,
            mobileOrder: 1,
            version: "2.0"
          },
          {
            title: "Checkout",
            link: "https://checkout.zksync.io",
            text: "Getting paid in crypto never been easier. Spent minutes to set your own crypto-checkout up without single code line & use our hosted dApp to get paid\n" +
              "fast, easy, permissionless and 🔒 secured on L2",
            order: 1,
            mobileOrder: 3,
            version: "1.x"
          }
        ] as Array<Review>;
      },
      required: false,
      type: Array
    } as PropOptions<Review[]>
  },
  data() {
    return {
      totalItems: this.reviewsData.length,
      currentItem: 0,
      displayRightArrow: true,
      scrollOffset: 0
    };
  },
  computed: {
    preparedReviews(): Review[] {
      return (this.reviewsData as Review[]).sort((reviewItem1, reviewItem2) => {
        const sortParam = window.screen.availWidth > 768 ? "order":"mobileOrder";
        return reviewItem1[sortParam] > reviewItem2[sortParam] ? 1:-1;
      });
    },
    leftPosition(): number {
      if (this.$refs.container && Math.max(1, this.itemsInView())===1) {
        return Math.max(0, this.currentItem * 257 - 10);
      }
      return Math.max(0, this.currentItem * 257 - 10);
    },
    rightArrowDisplayed(): boolean {
      return this.currentItem < this.totalItems - 1 && this.displayRightArrow;
    }
  },
  watch: {
    currentItem() {
      this.checkArrowDisplay();
      this.scrollOffset = 0;
    }
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.checkArrowDisplay();
      });
    }, 0);
    window.addEventListener("resize", this.checkArrowDisplay);
    const galleryBlock = document.querySelector(".reviewsContainer");
    if (!galleryBlock) {
      return;
    }
    const $hammer = new Hammer(galleryBlock as HTMLElement);
    $hammer.on("pan", (e) => {
      if (e.direction!==2 && e.direction!==4) {
        return;
      }
      this.scrollOffset = Math.min(Math.abs(e.deltaX), 360) * Math.sign(e.deltaX);
    });
    $hammer.on("panend ", () => {
      if (this.scrollOffset < 50 && this.currentItem < this.totalItems - 1 && this.displayRightArrow) {
        this.scrollItemForward();
      } else if (this.scrollOffset > 50 && this.currentItem > 0) {
        this.scrollItemBack();
      }
      this.scrollOffset = 0;
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkArrowDisplay);
  },
  methods: {
    scrollItemBack() {
      const inViewNow = Math.max(1, this.itemsInView());
      const scrollTo = this.currentItem - Math.max(1, inViewNow);
      this.currentItem = Math.max(scrollTo, 0);
    },
    scrollItemForward() {
      const inViewNow = Math.max(1, this.itemsInView());
      const scrollTo = this.currentItem + Math.max(1, inViewNow);
      this.currentItem = Math.min(scrollTo, (this.$refs.reviewItem as HTMLElement[]).length - inViewNow);
    },
    itemsInView() {
      let inViewTotal = 0;
      const containerSizes = ((this.$refs.container as Vue)?.$el as Element)?.getBoundingClientRect();
      const reviewItems = this.$refs.reviewItem as HTMLElement[];
      for (const itemEl of reviewItems) {
        if (!itemEl?.getBoundingClientRect) {
          continue;
        }
        const itemSizes = itemEl.getBoundingClientRect();
        if (itemSizes.left >= containerSizes.left - 20 && itemSizes.right <= containerSizes.right + 20) {
          inViewTotal++;
        }
      }
      return inViewTotal;
    },
    checkArrowDisplay() {
      const inViewNow = Math.max(1, this.itemsInView());
      this.displayRightArrow = !(inViewNow > 1 && this.currentItem + inViewNow >= this.totalItems);
    },

    /**
     * @param img
     * @returns {any}
     */
    getAssetUrl(img: string) {
      return require("@/assets/images/pages/index/" + img);
    }
  }
});
</script>
<style lang="scss">
.blockZkTools {
  a.zkToolItem {
    padding: 1.6rem 1.25rem !important;


    .zk-badge {
      line-height: 19px !important;
      text-align: center !important;
      font-size: 12px !important;
      vertical-align: middle !important;
      padding: 0 6px 0 4px !important;
      top: -5 px !important;
      left: initial !important;
      right: -0.5 rem !important;
      position: relative !important;
      font-weight: 300 !important;
      letter-spacing: -0.01rem;
      transition: background-color ease 0.27s !important;
      will-change: background-color;
      background: #4e529a !important;
      height: 20px;
    }

    h4.zkToolName {
      font-size: 2.25rem;
      line-height: 3rem;
      display: block;
      margin: 0 0 0.75rem;
      text-align: left;
      font-weight: 700;
    }
  }
}
</style>
