/**
 * Decision to switch from FontAwesome (as a web-font, full collection) was based on performance issues.
 * But replacing it with Remix Icons (same distribution form) wasn't enough.
 *
 * Now both packs are redundant and replaceable w/t the wrapping library oh-vue-icons:
 *  - tree-shaking support
 *  - access to crypto collection of icons (to improve the UI with token symbols)
 *  - on-build-transpiling support should solve everything
 *
 * @uses remixicon,oh-vue-icons
 * @link https://oh-vue-icons.netlify.app
 */
import { Plugin } from "@nuxt/types";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowUpLine,
  PrArrowDown,
  BiAt,
  BiGithub,
  BiQuestionCircle,
  CoMediumM,
  CoTelegramPlane,
  BiDiscord,
  BiTwitter,
  BiChevronDown,
  BiChevronUp,
} from "oh-vue-icons/icons";
import Vue from "vue";

/**
 * Special plugin to implement oh-awesome-icons into zkDapp
 */
const iconsPlugin: Plugin = (): void => {
  addIcons(
    RiArrowLeftLine,
    RiArrowRightLine,
    RiArrowUpLine,
    PrArrowDown,
    BiAt,
    BiGithub,
    BiQuestionCircle,
    CoMediumM,
    CoTelegramPlane,
    BiDiscord,
    BiTwitter,
    BiChevronDown,
    BiChevronUp
  );
  Vue.component("VIcon", OhVueIcon);
};

export default iconsPlugin;
