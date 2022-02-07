import Vue from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { defineNuxtPlugin } from "@nuxtjs/composition-api";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowUpLine,
  BiGlobe2,
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

export default defineNuxtPlugin(() => {
  addIcons(
    RiArrowLeftLine,
    RiArrowRightLine,
    RiArrowUpLine,
    BiGlobe2,
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
  ); // Used icons (to reduce bundle-size)

  Vue.component("v-icon", OhVueIcon);
})
